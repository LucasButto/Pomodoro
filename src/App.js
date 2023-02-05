import "./App.css";
import ButtonsDisplay from "./Components/ButtonsDisplay";
import Timer from "./Components/Timer";
import Comment from "./Components/Comment";
import { ButtonsDisplayConfig } from "./Components/ButtonsDisplayConfig";
import { useTimer } from "./Hooks/useTimer";

function App() {
  const {
    handleBreakDecrement,
    handleBreakIncrement,
    handleSessionDecrement,
    handleSessionIncrement,
    sessionLength,
    breakLength,
    currentSessionType,
  } = useTimer();
  const backgrounStyle = currentSessionType === "Session" ? "work" : "rest";

  return (
    <div className={"pomodoro-container " + backgrounStyle}>
      <div className="config-container">
        <ButtonsDisplayConfig
          title="Work Time"
          handleDecrement={handleSessionDecrement}
          handleIncrement={handleSessionIncrement}
          timeLength={sessionLength}
        />
        <ButtonsDisplayConfig
          title="Break Time"
          handleDecrement={handleBreakDecrement}
          handleIncrement={handleBreakIncrement}
          timeLength={breakLength}
        />
      </div>
      <Timer />
      <ButtonsDisplay />
      <Comment />
    </div>
  );
}

export default App;
