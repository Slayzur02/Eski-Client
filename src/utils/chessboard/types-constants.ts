/**
 * Types for the chess pieces, etc
 */
export type ChessPiece =
  | "pawn"
  | "knight"
  | "bishop"
  | "rook"
  | "queen"
  | "king";

export type Color = "white" | "black";

export interface PieceInfo {
  piece: ChessPiece;
  color: Color;
}

export interface ChessPiecesInfo {
  [key: string]: PieceInfo;
}

/**
 * Constants for components
 */
export const BoardSquares: string[][] = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

/**
 * Board squares from top down, for black
 */
export const BlackBoardSquares: string[][] = [
  ["h1", "g1", "f1", "e1", "d1", "c1", "b1", "a1"],
  ["h2", "g2", "f2", "e2", "d2", "c2", "b2", "a2"],
  ["h3", "g3", "f3", "e3", "d3", "c3", "b3", "a3"],
  ["h4", "g4", "f4", "e4", "d4", "c4", "b4", "a4"],
  ["h5", "g5", "f5", "e5", "d5", "c5", "b5", "a5"],
  ["h6", "g6", "f6", "e6", "d6", "c6", "b6", "a6"],
  ["h7", "g7", "f7", "e7", "d7", "c7", "b7", "a7"],
  ["h8", "g8", "f8", "e8", "d8", "c8", "b8", "a8"],
];
export const ChessStartingPosition: ChessPiecesInfo = {
  a1: {
    piece: "rook",
    color: "white",
  },
  b1: {
    piece: "knight",
    color: "white",
  },
  c1: {
    piece: "bishop",
    color: "white",
  },
  d1: {
    piece: "queen",
    color: "white",
  },
  e1: {
    piece: "king",
    color: "white",
  },
  f1: {
    piece: "bishop",
    color: "white",
  },
  g1: {
    piece: "knight",
    color: "white",
  },
  h1: {
    piece: "rook",
    color: "white",
  },
  a2: {
    piece: "pawn",
    color: "white",
  },
  b2: {
    piece: "pawn",
    color: "white",
  },
  c2: {
    piece: "pawn",
    color: "white",
  },
  d2: {
    piece: "pawn",
    color: "white",
  },
  e2: {
    piece: "pawn",
    color: "white",
  },
  f2: {
    piece: "pawn",
    color: "white",
  },
  g2: {
    piece: "pawn",
    color: "white",
  },
  h2: {
    piece: "pawn",
    color: "white",
  },
  a8: {
    piece: "rook",
    color: "black",
  },
  b8: {
    piece: "knight",
    color: "black",
  },
  c8: {
    piece: "bishop",
    color: "black",
  },
  d8: {
    piece: "queen",
    color: "black",
  },
  e8: {
    piece: "king",
    color: "black",
  },
  f8: {
    piece: "bishop",
    color: "black",
  },
  g8: {
    piece: "knight",
    color: "black",
  },
  h8: {
    piece: "rook",
    color: "black",
  },
  a7: {
    piece: "pawn",
    color: "black",
  },
  b7: {
    piece: "pawn",
    color: "black",
  },
  c7: {
    piece: "pawn",
    color: "black",
  },
  d7: {
    piece: "pawn",
    color: "black",
  },
  e7: {
    piece: "pawn",
    color: "black",
  },
  f7: {
    piece: "pawn",
    color: "black",
  },
  g7: {
    piece: "pawn",
    color: "black",
  },
  h7: {
    piece: "pawn",
    color: "black",
  },
};

export const ItemTypes = {
  CHESSPIECE: "chesspiece",
};

export const ArrayBoardRepresentation = {
  0: "a1",
  1: "b1",
  2: "c1",
  3: "d1",
  4: "e1",
  5: "f1",
  6: "g1",
  7: "h1",
  8: "a2",
  9: "b2",
  10: "c2",
  11: "d2",
 	12: "e2",
  13: "f2",
  14: "g2",
  15: "h2",
  16: "a3",
  17: "b3",
  18: "c3",
  19: "d3",
  20: "e3",
  21: "f3",
  22: "g3",
  23: "h3",
  24: "a4",
  25: "b4",
  26: "c4",
  27: "d4",
  28: "e4",
  29: "f4",
  30: "g4",
  31: "h4",
  32: "a5",
  33: "b5",
  34: "c5",
  35: "d5",
  36: "e5",
  37: "f5",
  38: "g5",
  39: "h5",
  40: "a6",
  41: "b6",
  42: "c6",
  43: "d6",
  44: "e6",
  45: "f6",
  46: "g6",
  47: "h6",
  48: "a7",
  49: "b7",
  50: "c7",
  51: "d7",
  52: "e7",
  53: "f7",
  54: "g7",
  55: "h7",
  56: "a8",
  57: "b8",
  58: "c8",
  59: "d8",
  60: "e8",
  61: "f8",
  62: "g8",
  63: "h8",
};

export const ArrayPieceRepesentation : {[key: number]: PieceInfo} = {
	1: {
		piece: "king",
		color: "white"
	},
	2: {
		piece: "queen",
		color: "white"
	},
	3: {
		piece: "rook",
		color: "white"
	},
	4: {
		piece: "bishop",
		color: "white"
	},
	5: {
		piece: "knight",
		color: "white"
	},
	6: {
		piece: "pawn",
		color: "white"
	},

	7: {
		piece: "king",
		color: "black"
	},
	8: {
		piece: "queen",
		color: "black"
	},
	9: {
		piece: "rook",
		color: "black"
	},
	10: {
		piece: "bishop",
		color: "black"
	},
	11: {
		piece: "knight",
		color: "black"
	},
	12: {
		piece: "pawn",
		color: "black"
	},
}
