import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  BlackBoardSquares,
  BoardSquares,
  ChessPiece,
  ChessPiecesInfo,
  ChessStartingPosition,
  Color,
} from "../../utils/chessboard/types-constants";

import Square from "./components/square";
import Piece from "./components/piece";
import PromotionPicker from "./components/promotion-picker";
import { useEffect } from "react";

import {
  connect,
  sendMsg,
  sendPieceMove,
  sendPiecePromotion,
} from "../../api/chessboard/chessboard";
import { shouldUpdateBoard } from "../../utils/chessboard/functions";
/**
 * Interface
 */
interface BoardProps {
  sideLength?: number;
  measurer?: string;
}


export default function Board({
  sideLength = 50,
  measurer = "px",
}: BoardProps) {
  const length: string = sideLength + measurer;
  const [boardState, setBoardState] = useState(ChessStartingPosition);
  const [possibleMoves, setPossibleMoves] = useState(["g1f3"]);
  const [promoting, setPromoting] = useState(null);
  const [playerColorBoard, setPlayerColorBoard] = useState(BoardSquares)
 
  // updates the valid moves (from websocket backend)
  const updateValidMoves = (validMoveList: string[]) => {
    setPossibleMoves(validMoveList);
  };

  // checks if board needs updating with `renewBoard`
  // and then if there are differences, update - used mainly for castling + en-pessant
  const considerUpdatingBoard = (newBoard) => {
    const shouldUpdate = shouldUpdateBoard(boardState, newBoard)
    if (shouldUpdate) {
      setBoardState(newBoard)
    }
  }

  // pass to websocket at the start 
  useEffect(() => {
    connect(updateValidMoves, considerUpdatingBoard);
  }, []);


  // checks if moves are valid
  const isValidMove = (startSquare: string, endSquare: string) => {
    return possibleMoves.includes(startSquare + endSquare);
  };



  /**
   * Handles the updating of the board from a single piece movement
   * Will delay it if it's promotion
   * @param startSquare - start of the piece
   * @param endSquare  - end of the piece
   */
  const movePiece = (startSquare: string, endSquare: string) => {
    setBoardState((prevBoard) => {
      const movedPiece = prevBoard[startSquare];
      if (movedPiece === undefined) {
        return prevBoard;
      }
      // check if promotion, then give visuals, and stop
      // also checks if it is en passant
      if (movedPiece.piece === "pawn") {
        if (movedPiece.color === "white" && endSquare[1] === "8") {
          promotePieceVisuals(startSquare, endSquare, movedPiece.color);
          return prevBoard;
        } else if (movedPiece.color === "black" && endSquare[1] === "1") {
          promotePieceVisuals(startSquare, endSquare, movedPiece.color);
          return prevBoard;
        }
      }

      const duplicateBoard = { ...prevBoard };
      duplicateBoard[endSquare] = duplicateBoard[startSquare];
      delete duplicateBoard[startSquare];
      sendPieceMove(startSquare, endSquare);
      return duplicateBoard;
    });
  };

  /**
   * Handles the promotion UI
   * @param startSquare - where the pawn promoted from
   * @param endSquare - the square it's going to
   * @param color - color of the pawn
   */
  const promotePieceVisuals = (
    startSquare: string,
    endSquare: string,
    color: Color
  ) => {
    setPromoting({
      startSquare: startSquare,
      endSquare: endSquare,
      color: color,
    });
  };

  /**
   * Promotes a piece on the board
   * @param piece - piece to promote to
   */
  const promotePiece = (piece: ChessPiece) => {
    if (piece === null) {
      return;
    }
    const { startSquare, endSquare, color } = promoting;
    setBoardState((prevBoard) => {
      const duplicateBoard = { ...prevBoard };
      duplicateBoard[endSquare] = {
        piece: piece,
        color: color,
      };
      delete duplicateBoard[startSquare];
      return duplicateBoard;
    });

    setPromoting(null);

    sendPiecePromotion(startSquare, endSquare, piece);
  };

  return (
    <div>
      <div className="flex w-full justify-center py-16">
        <DndProvider backend={HTML5Backend}>
          <div className="flex flex-col">
            {playerColorBoard.map((row: string[], rowIdx: number) => (
              // UI for every line in the board
              <div
                key={rowIdx}
                className="flex flex-row"
                style={{ height: length }}
              >
                {row.map((square: string, colIdx: number) => (
                  // UI for singe square
                  <div key={colIdx} style={{ width: length }}>
                    <Square
                      rowIdx={rowIdx}
                      colIdx={colIdx}
                      movePiece={movePiece}
                      validity={isValidMove}
                      boardSquares = {playerColorBoard}
                    >
                      <Piece
                        piece={boardState[square]}
                        square={square}
                        size={length}
                      />
                      {/* if we're promoting, add promotion picer */}
                      {promoting && promoting.endSquare === square ? (
                        <PromotionPicker
                          length={sideLength}
                          color={promoting.color}
                          promote={promotePiece}
                        />
                      ) : null}
                    </Square>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </DndProvider>
      </div>
      <button onClick = {()=>{
        if (playerColorBoard === BoardSquares){
          setPlayerColorBoard(BlackBoardSquares)
        } else {
          setPlayerColorBoard(BoardSquares)
        }
      }}>Rotate board</button>
    </div>
  );
}
