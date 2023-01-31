import React from "react";
import { useContext } from "react";
import TimeContext from "../Contexts/TimeContext";
import Button from "./Button";
import { useTimer } from "../Hooks/useTimer";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

import "../Styles/ButtonsDisplay.css";

const ButtonsDisplay = () => {
  const { setMinutes, setSeconds, setRest } = useContext(TimeContext);
  const { isPaused, setIsPaused } = useTimer();

  const controlTimerHandler = () => {
    setIsPaused(!isPaused);
  };

  const resetButtonHandler = () => {
    setIsPaused(true);
    setMinutes(25);
    setSeconds(0);
    setRest(false);
  };
  return (
    <>
      <div className="buttons-container">
        {isPaused ? (
          <Button
            name={<PlayArrowRoundedIcon />}
            buttonHandler={controlTimerHandler}
            style={"play"}
          />
        ) : (
          <Button
            name={<PauseRoundedIcon />}
            buttonHandler={controlTimerHandler}
            style={"pause"}
          />
        )}
        <Button
          name={<RestartAltRoundedIcon />}
          buttonHandler={resetButtonHandler}
          style={"reset"}
        />
      </div>
    </>
  );
};

export default ButtonsDisplay;
