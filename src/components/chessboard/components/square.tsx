import React from "react";
import { useDrop } from "react-dnd";
import {
  ItemTypes,
} from "../../../utils/chessboard/types-constants";

interface Props {
  rowIdx: number;
  colIdx: number;
  children: React.ReactNode;
  movePiece: (...args: any[]) => void;
  validity: (...args: any) => boolean;
  boardSquares: string[][]
}

interface DragPieceInfo {
  square: string;
}

export default function Square({
  rowIdx,
  colIdx,
  children,
  movePiece,
  validity,
  boardSquares
}: Props) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.CHESSPIECE,
      canDrop: (item: DragPieceInfo) =>
        validity(item.square, boardSquares[rowIdx][colIdx]),
      drop: (item: DragPieceInfo, moniter) => {
        console.log(item.square)
        if (item.square === boardSquares[rowIdx][colIdx]) {
          return;
        }
        movePiece(item.square, boardSquares[rowIdx][colIdx]);
      },
      collect: (moniter) => ({
        isOver: !!moniter.isOver(),
        canDrop: !!moniter.canDrop(),
      }),
    }),
    [validity]
  );

  return (
    <div
      ref={drop}
      className={
        canDrop
          ? "flex items-center justify-center w-full h-full bg-yellow-200 border-black"
          : (rowIdx + colIdx) % 2 === 0
          ? "flex items-center justify-center w-full h-full bg-gray-200"
          : "flex items-center justify-center w-full h-full bg-yellow-900"
      }
      style={{
        borderWidth: isOver ? "2px" : "0px",
        borderColor: isOver
          ? (rowIdx + colIdx) % 2 === 0
            ? "blueviolet"
            : "green"
          : "transparent",
      }}
    >
      {children}
    </div>
  );
}
