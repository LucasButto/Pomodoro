import React from "react";
import Button from "./Button";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { useTimer } from "../Hooks/useTimer";

import "../Styles/ButtonsDisplay.css";

const ButtonsDisplay = () => {
  const { handleStartStopClick, isRunning, handleResetClick } = useTimer();
  return (
    <>
      <div className="buttons-container">
        {!isRunning ? (
          <Button
            name={<PlayArrowRoundedIcon />}
            buttonHandler={handleStartStopClick}
            styles="play timer-controller"
          />
        ) : (
          <Button
            name={<PauseRoundedIcon />}
            buttonHandler={handleStartStopClick}
            styles="pause timer-controller"
          />
        )}
        <Button
          name={<RestartAltRoundedIcon />}
          buttonHandler={handleResetClick}
          styles="reset timer-controller"
        />
      </div>
    </>
  );
};

export default ButtonsDisplay;
