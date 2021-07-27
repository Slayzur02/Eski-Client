import Timer from "./components/timer"

export default function Game(){
	return (
		<div className = "flex flex-col justify-center bg-green-200">
			This will be a wrapper for the chessboard - for 1v1
			<Timer/>
		</div>
	)
}