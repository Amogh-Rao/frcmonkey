import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import { useState } from 'react';

import HomePage from './components/HomePage';
import RobotSimulator from './components/RobotSimulator';
import JavaOverview from './components/JavaOverview';
import GitOverview from './components/GitOverview';
import WPILib from './components/WPILib';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);


  return (
    <Router>
      {/* Show Intro Animation if `showIntro` is true */}
      {showIntro ? (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      ) : (
        <div className="bg-funkyBlack text-funkyYellow h-full w-screen">
          {/* Updated Header */}
          <header className="p-5 flex items-center justify-between bg-funkyGray2">
            {/* Home Icon */}
            <Link to="/" className="flex items-center text-funkyYellow hover:text-funkyGold">
              <span className="material-icons text-3xl">home</span>
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
            <Route path="/java-overview" element={<JavaOverview />} />
            <Route path="/git-overview" element={<GitOverview />} />
            <Route path="/wpilib" element={<WPILib />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
