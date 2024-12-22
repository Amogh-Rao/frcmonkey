import React from 'react';

const WPILib: React.FC = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="bg-funkyGray rounded-lg p-6 max-w-screen-lg mt-5 mb-5 mx-auto text-left">
        <h1 className="text-4xl font-bold text-funkyYellow mb-6">WPILib</h1>
        <p className="text-lg text-funkyYellow mb-8">
          WPILib is a software library designed to simplify the programming of FRC robots. It provides essential tools and APIs for controlling mechanisms, working with sensors, motor controllers, and cameras, and enabling simulation and testing.
        </p>

        {/* Why Learn WPILib */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Why Learn WPILib?</h2>
        <p className="text-lg text-funkyYellow mb-8">
          WPILib empowers you to control and automate your robot effectively. It simplifies complex tasks, such as motor control, sensor integration, and vision processing, allowing you to focus on building robust solutions.
        </p>

        {/* Key Concepts */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Key Concepts:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3 mb-5">
          <li>Robot Frameworks: <span className="font-bold">TimedRobot</span> and <span className="font-bold">Command-based</span></li>
          <li>Subsystems and Commands</li>
          <li>Motor Control: PWM, CAN, ESC</li>
          <li>Sensors: Encoders, Gyroscopes, Potentiometers</li>
          <li>Simulation</li>
          <li>Tools: Shuffleboard, DriverStation, Choreo</li>
          <li>Programming Languages: C++, Java, Python (partial support)</li>
        </ul>

        {/* Setup */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Setup:</h2>
        <p className="text-lg text-funkyYellow mb-8">
          To get started with WPILib, follow the setup instructions at the official{' '}
          <a
            href="https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-funkyGold hover:underline"
          >
            WPILib Setup Guide
          </a>. Ensure you have Java installed from{' '}
          <a
            href="https://www.oracle.com/java/technologies/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-funkyGold hover:underline"
          >
            Oracle's official site
          </a>.
        </p>

        {/* TimedRobot vs Command-Based */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">TimedRobot vs Command-Based:</h2>
        <h3 className="text-xl font-semibold text-funkyGold mt-4 mb-2">TimedRobot</h3>
        <p className="text-lg text-funkyYellow mb-8">
          TimedRobot is ideal for simple robots controlled using periodic methods. However, as your robot becomes more complex, this method can lead to messy and unorganized code.
        </p>
        <h3 className="text-xl font-semibold text-funkyGold mt-4 mb-2">Command-Based</h3>
        <p className="text-lg text-funkyYellow mb-8">
          The Command-Based framework provides a cleaner, object-oriented approach. It allows you to define <strong>Subsystems</strong> (robot components) and <strong>Commands</strong> (actions), which the Command Scheduler runs efficiently.
        </p>

        {/* Tools */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Tools:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3 mb-5">
          <li>
            <span className="font-bold">Shuffleboard:</span> A dashboard for monitoring robot data in real-time, useful for PID tuning and debugging.
          </li>
          <li>
            <span className="font-bold">DriverStation:</span> An application to switch robot modes (autonomous, teleoperated) and monitor metrics like battery voltage.
          </li>
          <li>
            <span className="font-bold">Choreo:</span> A graphical tool for designing autonomous paths using drag-and-drop points and advanced robot path calculations.
          </li>
        </ul>

        {/* Tips */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Tips:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3 mb-5">
          <li>Experiment with WPILib's built-in functions to understand them deeply.</li>
          <li>Practice implementing features manually to improve problem-solving skills.</li>
        </ul>

        {/* Resources */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Resources:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3">
          <li>
            <a
              href="https://docs.wpilib.org/en/stable/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              Official WPILib Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCmJAoN-yI6AJDv7JJ3372yg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              WPILib YouTube Channel
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WPILib;
