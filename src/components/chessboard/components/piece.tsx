import { useDrag} from "react-dnd";
import { ItemTypes, PieceInfo } from "../../../utils/chessboard/types-constants";

import {PieceToPNGString} from "../../../utils/chessboard/functions"

interface Props {
  piece: PieceInfo;
  square: string;
	size: string;
}


export default function Piece({ piece, square, size}: Props) {
  const previewOptions = {
    offsetX: 0,
    offsetY: 0,
  }

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    previewOptions,
    type: ItemTypes.CHESSPIECE,
    item: { square },
    collect: (moniter) => ({
      isDragging: !!moniter.isDragging(),
    }),
  }), [square]);



  if (piece === undefined) {
    return null;
  }

  const imageSrc: string = process.env.PUBLIC_URL + "/images/" + PieceToPNGString(piece) + ".svg" 

  return (
    <>
			<div ref = {preview} style = {{
        opacity: 1
      }}>
				<img src={imageSrc} alt = {PieceToPNGString(piece)}/>
			</div>
      <img
        ref={drag}
        src={imageSrc}
        alt = {PieceToPNGString(piece)}
        style={{
          opacity: isDragging ? 0 : 1,
        }}
      />
    </>
  );
}
