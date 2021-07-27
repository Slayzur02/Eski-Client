import {
  boardTranslateNumbersToLetters,
  PieceToOneLetterRep,
} from "../../utils/chessboard/functions";
import { ChessPiece, Color } from "../../utils/chessboard/types-constants";

var socket = new WebSocket("ws://localhost:8080/ws");

let connect = (updateValidMoves, updateBoard) => {
  socket.onopen = () => {
    console.log("Successfully connected");
  };

  socket.onmessage = (msg) => {
    const newBoardState = JSON.parse(msg.data);
		console.log(msg.data)

    const numberizedBoardState = newBoardState["Board"];
    let translated = {};
    if (numberizedBoardState !== null && numberizedBoardState !== null) {
      translated = boardTranslateNumbersToLetters(numberizedBoardState);
    }

		updateBoard(translated)
		updateValidMoves(newBoardState["ValidMoves"])
  };

  socket.onclose = () => {
    console.log("Closed connection");
  };

  socket.onerror = (err) => {
    console.log(err);
  };
};

let sendMsg = (msg) => {
  socket.send(msg);
};

let sendPieceMove = (startSquare: string, endSquare: string) => {
  socket.send(
    JSON.stringify({
      type: "move",
      start: startSquare,
      end: endSquare,
      piece: "",
    })
  );
};

let sendPiecePromotion = (
  startSquare: string,
  endSquare: string,
  piece: ChessPiece
) => {
  socket.send(
    JSON.stringify({
      type: "promotion",
      start: startSquare,
      end: endSquare,
      piece: PieceToOneLetterRep(piece),
    })
  );
};

export { connect, sendMsg, sendPieceMove, sendPiecePromotion };
