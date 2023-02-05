import { useContext } from "react";
import TimeContext from "../Contexts/TimeContext";

export const useTimer = () => {
  const {
    setIsRunning,
    setBreakLength,
    setSessionLength,
    setTimeLeft,
    setCurrentSessionType,
    breakLength,
    sessionLength,
    timeLeft,
    isRunning,
    currentSessionType,
  } = useContext(TimeContext);

  const handleStartStopClick = () => {
    console.log("handleStartStopClick");
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleResetClick = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setCurrentSessionType("Session");
  };

  const handleBreakDecrement = () => {
    setBreakLength((prevBreakLength) => {
      if (prevBreakLength > 1) {
        return prevBreakLength - 1;
      } else {
        return prevBreakLength;
      }
    });
  };

  const handleBreakIncrement = () => {
    setBreakLength((prevBreakLength) => prevBreakLength + 1);
  };

  const handleSessionDecrement = () => {
    setSessionLength((prevSessionLength) => {
      if (prevSessionLength > 1) {
        setTimeLeft(prevSessionLength * 60 - 60);
        return prevSessionLength - 1;
      } else {
        return prevSessionLength;
      }
    });
  };

  const handleSessionIncrement = () => {
    setSessionLength((prevSessionLength) => {
      setTimeLeft(prevSessionLength * 60 + 60);
      return prevSessionLength + 1;
    });
  };

  const formattedTimeLeft = (timeLeft) => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  return {
    breakLength,
    sessionLength,
    timeLeft,
    isRunning,
    currentSessionType,
    handleStartStopClick,
    handleResetClick,
    handleBreakDecrement,
    handleBreakIncrement,
    handleSessionDecrement,
    handleSessionIncrement,
    formattedTimeLeft,
  };
};
