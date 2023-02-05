import React from "react";
import "../Styles/Timer.css";
import { useTimer } from "../Hooks/useTimer";

const Timer = () => {
  const { timeLeft, formattedTimeLeft } = useTimer();
  return (
    <>
      <div className="pomodoro-timer-container">
        <div className="timer">
          <p>{formattedTimeLeft(timeLeft)}</p>
        </div>
      </div>
    </>
  );
};

export default Timer;
