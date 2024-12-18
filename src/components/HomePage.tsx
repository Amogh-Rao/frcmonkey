import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-5 space-y-10 md:space-y-0 md:space-x-10 max-w-screen-2xl mx-auto">
      {/* Left Section - Stacked vertically */}
      <div className="flex flex-col space-y-6 w-full md:w-1/3">
        <div className="bg-funkyGray rounded-lg p-5 flex-1">
          <h4 className="text-xl font-bold text-funkyYellow">Learn Java</h4>
          <p className="text-funkyYellow">Master Java programming to control your FRC robot.</p>
        </div>
        <div className="bg-funkyGray rounded-lg p-5 flex-1">
          <h4 className="text-xl font-bold text-funkyYellow">Understand Git</h4>
          <p className="text-funkyYellow">Learn version control for managing robot code and collaborating with your team.</p>
        </div>
        <div className="bg-funkyGray rounded-lg p-5 flex-1">
          <h4 className="text-xl font-bold text-funkyYellow">WPILib Basics</h4>
          <p className="text-funkyYellow">Get hands-on experience with WPILib, the library used for FRC robot programming.</p>
        </div>
      </div>

      {/* Middle Section - About FRCMonkey */}
      <div className="bg-funkyGray rounded-lg p-6 w-full md:w-1/3 text-center">
        <h2 className="text-3xl font-bold text-funkyYellow">What is FRCMonkey?</h2>
        <p className="text-2xl text-funkyYellow mt-5">
          FRCMonkey helps you learn and practice coding for FRC robots. With interactive lessons and simulations,
          you’ll be ready to take your robot control skills to the next level.
        </p>

        {/* Button below About FRCMonkey */}
        <Link 
          to="/robot-simulator" 
          className="mt-10 inline-block bg-funkyYellow text-black p-4 rounded-3xl shadow-md text-2xl hover:bg-funkyGold transition-colors duration-300"
        >
          Go to Robot Simulator
        </Link>
      </div>

      {/* Right Section - Reference Links (Buttons with hover effects) */}
      <div className="flex flex-col space-y-6 w-full md:w-1/3">
        <div className="bg-funkyGray rounded-lg p-3 flex-1">
          <h4 className="text-xl font-bold text-funkyYellow">Java Documentation</h4>
          <button 
            className="w-full mt-3 bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold transition-colors duration-300"
            onClick={() => window.open('https://docs.oracle.com/en/java/', '_blank')}
          >
            Learn Java
          </button>
        </div>
        <div className="bg-funkyGray rounded-lg p-3 flex-1">
          <h4 className="text-xl font-bold text-funkyYellow">Git Basics</h4>
          <button 
            className="w-full mt-3 bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold transition-colors duration-300"
            onClick={() => window.open('https://git-scm.com/doc', '_blank')}
          >
            Learn Git
          </button>
        </div>
        <div className="bg-funkyGray rounded-lg p-3 flex-1">
          <h4 className="text-xl font-bold text-funkyYellow">WPILib Documentation</h4>
          <button 
            className="w-full mt-3 bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold transition-colors duration-300"
            onClick={() => window.open('https://docs.wpilib.org/en/stable/', '_blank')}
          >
            Learn WPILib
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
