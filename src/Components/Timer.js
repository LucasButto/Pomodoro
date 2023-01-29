import React from 'react'
import '../Styles/Timer.css'
import {useContext} from 'react'
import TimeContext from '../Contexts/TimeContext'

const Timer = () => {
    const {seconds, minutes} = useContext(TimeContext)
    const conditionS = (seconds < 10) ? "0" : ""
    const conditionM = (minutes < 10) ? "0" : ""
  return (
    <>
        <div className="pomodoro-timer-container">
            <div className="timer">
                <p>{String(conditionM+minutes) + ":" + String(conditionS+seconds)}</p>
            </div>
        </div>
    </>
  )
}

export default Timer
