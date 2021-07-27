export default function PromotionPicker({ length, color, promote }) {
  const imgStrPrefix = process.env.PUBLIC_URL + "/images/";

	const ImgWrapper = ({pieceLetter, pieceString}) => {
		return (
			<img
			 className = "bg-gray-200 cursor-pointer hover:bg-red-400 "
			 src = {imgStrPrefix + color[0] + pieceLetter + ".svg"}
			 alt = {color + pieceString}
			 onClick = {()=>{promote(pieceString)}}
			/>
		)
	}

  return (
    <div
      className="relative"
      style={{
        top: (-length * 3) / 2,
        left: (-length * 5) / 2,
      }}
    >
      <div
        className="absolute"
        style={{
					width: length,
        }}
      >
        <div className = "flex flex-row ">
					<ImgWrapper pieceLetter = "Q" pieceString = "queen"/>
					<ImgWrapper pieceLetter = "R" pieceString = "rook"/>
					<ImgWrapper pieceLetter = "B" pieceString = "bishop"/>
					<ImgWrapper pieceLetter = "N" pieceString = "knight"/>
        </div>
      </div> 
    </div>
  );
}
