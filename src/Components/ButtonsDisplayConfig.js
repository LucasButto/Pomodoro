import React from "react";
import Button from "./Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

export const ButtonsDisplayConfig = ({
  title,
  handleDecrement,
  handleIncrement,
  timeLength,
}) => {
  return (
    <>
      <div className="config-elemnets-container">
        <h2>{title}</h2>
        <div className="buttons-container">
          <Button
            name={<RemoveRoundedIcon />}
            buttonHandler={handleDecrement}
            styles="config-buttons reset"
          />
          <p id="time-left">{timeLength + " mins"}</p>
          <Button
            name={<AddRoundedIcon />}
            buttonHandler={handleIncrement}
            styles="config-buttons play"
          />
        </div>
      </div>
    </>
  );
};
