import { ArrayBoardRepresentation, ArrayPieceRepesentation, ChessPiece, ChessPiecesInfo, PieceInfo } from "./types-constants";

/**
 * Helper function to find each piece's PNG from their piece type and color type
 */
function PieceToPNGString(info: PieceInfo): string {
  if (info.piece === "knight") {
    return info.color[0] + "N";
  } else {
    return info.color[0] + info.piece[0].toUpperCase();
  }
}

function PieceToOneLetterRep (piece: ChessPiece): string {
  if (piece === "knight"){
    return "n"
  }
  return piece[0]
}

function boardTranslateNumbersToLetters(numberizedBoardState: {number: number}): ChessPiecesInfo{
  let translatedBoardState = {}
  for (const [key, value] of Object.entries(numberizedBoardState)){
			translatedBoardState[ArrayBoardRepresentation[key]] = ArrayPieceRepesentation[value]
  }
  return translatedBoardState;
}

function renewBoard(firstBoard: ChessPiecesInfo, secondBoard: ChessPiecesInfo) {
  for (let square in firstBoard) {
    if (!(square in secondBoard)) {
      return true
    }
  }
  return false
}

export {PieceToPNGString, PieceToOneLetterRep, boardTranslateNumbersToLetters, renewBoard}
