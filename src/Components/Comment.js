import React from "react";
import { useTimer } from "../Hooks/useTimer";

import "../Styles/Comment.css";

const Comment = () => {
  const { currentSessionType } = useTimer();
  const shownComment =
    currentSessionType === "Session" ? "Time to Work" : "Take a Rest";
  return (
    <>
      <p className="comment">{shownComment}</p>
    </>
  );
};

export default Comment;
