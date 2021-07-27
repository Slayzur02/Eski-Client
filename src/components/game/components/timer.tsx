import {useRef} from "react";
import Countdown from "react-countdown";

import { millisecondsToTimeDisplay } from "../../../utils/game/functions";

export default function Timer() {
  const timerRef = useRef(null);
  return (
    <div className = "flex flex-col">
      <Countdown
        ref={timerRef}
        date={Date.now() + 300000}
        intervalDelay={0}
        precision={2}
        renderer={(props) => (
          <div>{millisecondsToTimeDisplay(props.total)}</div>
        )}
        onComplete={() => {
          console.log("this is running amazingly badly");
        }}
      />
      <button
        onClick={() => {
          if (timerRef !== null) {
            timerRef.current.pause();
          }
        }}
      >
        Click this to stop the timer!
      </button>
      <button
        onClick={() => {
          timerRef.current.start();
        }}
      >
        Click this to start it again!
      </button>
    </div>
  );
}
