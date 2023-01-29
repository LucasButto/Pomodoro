import { useContext, useState, useEffect } from "react";
import TimeContext  from "../Contexts/TimeContext";

export const useTimer = () => {

    const {minutes, setMinutes, seconds, setSeconds, rest, setRest, longRest, setLongRest, isPaused, setIsPaused} = useContext(TimeContext)
    const [intervalId, setIntervalId] = useState(null);
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (!isPaused) {
          let interval = setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            } else if (minutes > 0) {
              setMinutes(minutes - 1);
              setSeconds(59);
            }else if(minutes === 0 && seconds === 0 && counter < 3 && rest === false) {
                setRest(!rest)
                setMinutes(5)
                setSeconds(0)
            } else if(minutes === 0 && seconds === 0 && counter < 3 && rest === true) {
                setCounter(counter + 1)
                setRest(!rest)
                setMinutes(25)
                setSeconds(0)
            } else if (counter === 3) {
                setLongRest(!longRest)
                setRest(!rest)
                setMinutes(30)
                setSeconds(0)
                setCounter(0)
            } else {
              clearInterval(interval);
            }
          }, 1000);
          setIntervalId(interval);
        } else {
          clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isPaused, minutes, seconds]);

    return { setIsPaused, isPaused}
        
}