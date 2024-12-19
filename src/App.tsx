import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import HomePage from './components/HomePage';
import RobotSimulator from './components/RobotSimulator';

function App() {
  return (
    <Router>
      <div className="bg-funkyBlack text-funkyYellow h-screen w-screen">
        <header className="p-5 text-center">
          <h1 className="text-4xl font-bold">FRCMonkey</h1>
          <p className="text-xl">An interactive tool to learn robot code!</p>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/robot-simulator" element={<RobotSimulator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
