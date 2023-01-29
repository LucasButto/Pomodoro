import React from 'react'
import {useContext, useState, useEffect} from 'react'
import TimeContext from '../Contexts/TimeContext'
import '../Styles/ButtonsDisplay.css'
import Button from './Button'

const ButtonsDisplay = () => {
    const {minutes, setMinutes, seconds, setSeconds} = useContext(TimeContext)
    const [isPaused, setIsPaused] = useState(true)
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (isPaused === false) {
            const id = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(id);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
            setIntervalId(id);
        }
    }, [isPaused, minutes, seconds]);

    const controlTimerHandler = () => {
        setIsPaused(!isPaused)
    }

    const resetButtonHandler = () => {
        setIsPaused(true)
        setMinutes(25)
        setSeconds(0)
    }
  return (
    <>
        <div className='buttons-container'>
            {isPaused 
            ? <Button name={"start"} buttonHandler={controlTimerHandler}/>
            : <Button name={"stop"} buttonHandler={controlTimerHandler}/>}
            <Button name={"reset"} buttonHandler={resetButtonHandler}/>
        </div>
    </>
  )
}

export default ButtonsDisplay
