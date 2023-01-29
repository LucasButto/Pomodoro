import { useState,createContext} from "react";

const TimeContext = createContext();

const TimeProvider = ({children}) => {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isPaused, setIsPaused] = useState(true)
    const [rest, setRest] = useState(false)
    const [longRest, setLongRest] = useState(false)
    
    return (
        <TimeContext.Provider value={{minutes, setMinutes, seconds, setSeconds, rest, setRest, longRest, setLongRest, isPaused, setIsPaused}}>
            {children}
        </TimeContext.Provider>
    )
}

export {TimeProvider};
export default TimeContext;