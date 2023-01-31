import "./App.css";
import ButtonsDisplay from "./Components/ButtonsDisplay";
import Timer from "./Components/Timer";
import TimeContext from "../src/Contexts/TimeContext";
import { useContext } from "react";
import Comment from "./Components/Comment";

function App() {
  const { rest } = useContext(TimeContext);
  const backgrounStyle = rest ? "rest" : "work";
  return (
    <div className={"pomodoro-container " + backgrounStyle}>
      <Timer />
      <ButtonsDisplay />
      <Comment />
    </div>
  );
}

export default App;
