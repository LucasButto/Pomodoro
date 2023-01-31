import React, { useContext } from "react";
import TimeContext from "../Contexts/TimeContext";

import "../Styles/Comment.css";

const Comment = () => {
  const { rest } = useContext(TimeContext);
  const shownComment = rest ? "Take a break!" : "Let's work!";
  return (
    <>
      <p className="comment">{shownComment}</p>
    </>
  );
};

export default Comment;
