import './App.css';
import ButtonsDisplay from './Components/ButtonsDisplay';
import Timer from './Components/Timer';
import { TimeProvider } from './Contexts/TimeContext';

function App() {
  return (
    <div className="pomodoro-container">
      <TimeProvider>
        <Timer/>
        <ButtonsDisplay/>
      </TimeProvider>
    </div>
  );
}

export default App;
