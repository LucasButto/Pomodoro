import { useState,createContext} from "react";

const TimeContext = createContext();

const TimeProvider = ({children}) => {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    
    return (
        <TimeContext.Provider value={{minutes, setMinutes, seconds, setSeconds}}>
            {children}
        </TimeContext.Provider>
    )
}

export {TimeProvider};
export default TimeContext;