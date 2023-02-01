import { useState, createContext } from "react";

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(1);
  const [isPaused, setIsPaused] = useState(true);
  const [rest, setRest] = useState(null);

  return (
    <TimeContext.Provider
      value={{
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        rest,
        setRest,
        isPaused,
        setIsPaused,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export { TimeProvider };
export default TimeContext;
