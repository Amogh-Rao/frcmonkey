import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';

import HomePage from './components/HomePage';
import RobotSimulator from './components/RobotSimulator';

function App() {
  return (
    <Router>
      <div className="bg-funkyBlack text-funkyYellow h-screen w-screen">
        {/* Updated Header */}
        <header className="p-5 flex items-center justify-between bg-funkyGray2">
          {/* Home Icon */}
          <Link to="/" className="flex items-center text-funkyYellow hover:text-funkyGold">
            <span className="material-icons text-3xl">home</span> {/* Home icon */}
          </Link>

          {/* Title and Subtitle */}
          <div className="text-center flex-grow">
            <h1 className="text-4xl font-bold">FRCMonkey</h1>
            <p className="text-xl">An interactive tool to learn robot code!</p>
          </div>
        </header>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/robot-simulator" element={<RobotSimulator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
