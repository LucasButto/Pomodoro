import React from 'react'
import {useContext} from 'react'
import TimeContext from '../Contexts/TimeContext'
import Button from './Button'
import { useTimer } from '../Hooks/useTimer'

import '../Styles/ButtonsDisplay.css'

const ButtonsDisplay = () => {
    const {setMinutes, setSeconds} = useContext(TimeContext)
    const {isPaused, setIsPaused} = useTimer()

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
