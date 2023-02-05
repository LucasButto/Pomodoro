import { useState, createContext, useEffect } from "react";
import tone from "../sounds/Tone.mp3";

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const { Howl } = require("howler");

  useEffect(() => {
    var sound = new Howl({
      src: [tone],
      html5: true,
      loop: false,
    });
    if (!isRunning) {
      return;
    }

    let intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        console.log("prevTimeLeft: ", prevTimeLeft);
        if (prevTimeLeft === 0) {
          if (currentSessionType === "Session") {
            sound.play();
            setCurrentSessionType("Break");
            setTimeLeft(breakLength * 60);
          } else {
            sound.play();
            setCurrentSessionType("Session");
            setTimeLeft(sessionLength * 60);
          }
        } else {
          return prevTimeLeft - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [breakLength, sessionLength, isRunning, currentSessionType, Howl]);

  return (
    <TimeContext.Provider
      value={{
        breakLength,
        sessionLength,
        timeLeft,
        isRunning,
        currentSessionType,
        setBreakLength,
        setSessionLength,
        setTimeLeft,
        setIsRunning,
        setCurrentSessionType,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export { TimeProvider };
export default TimeContext;
