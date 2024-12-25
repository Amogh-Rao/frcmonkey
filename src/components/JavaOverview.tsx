import React from 'react';

const JavaOverview: React.FC = () => {
  return (
    <div className="flex justify-center h-screen items-start">
      <div className="bg-funkyGray rounded-lg p-6 max-w-screen-lg mt-5 mx-auto text-left">
        <h1 className="text-4xl font-bold text-funkyYellow mb-2">Java Overview</h1>
        <p className="text-lg text-funkyYellow mb-8">
          Java is a versatile programming language widely used for FRC robot programming. It offers object-oriented principles, strong typing, and powerful libraries, making it an excellent choice for controlling robots.
        </p>

        {/* Why Learn Java */}
        <h2 className="text-2xl font-bold text-funkyYellow mb-2 mt-5">Why Learn Java?</h2>
        <p className="text-lg text-funkyYellow mb-8">
          Java is one of the main languages supported by WPILib, the library that controls most FRC robots. It’s cross-platform, has extensive documentation, and is beginner-friendly. Mastering Java will give you the confidence  & skillset to tackle FRC challenges and beyond!
        </p>

        {/* Key Concepts */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Key Concepts:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3 mb-5">
          <li>Classes and Objects</li>
          <li>Methods and Functions</li>
          <li>Control Structures</li>
          <li>Inheritance and Polymorphism</li>
          <li>Error Handling</li>
        </ul>

        {/* Example Code */}
        <h2 className="text-2xl font-bold text-funkyYellow mb-2 mt-5">Example Code:</h2>
        <div className="bg-black text-white rounded-lg p-4 text-left font-mono text-sm overflow-x-auto mb-5">
          <code>
            {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, FRC!");
    }
}`}
          </code>
        </div>
        <p className="text-lg text-funkyYellow mb-5">
          This simple program demonstrates how to print a message in Java. You can build on this basic program by implementing concepts like input, classes, and libraries.
        </p>

        {/* Tips for FRC Programming */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Tips for FRC Programming:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3 mb-5">
          <li>
            Use <span className="text-funkyGold">Shuffleboard</span> or another dashboard to debug and monitor values in real-time.
          </li>
          <li>
            Test your code frequently on a simulator before deploying to the robot.
          </li>
          <li>
            Organize your code with subsystems and commands to keep it clean and modular.
          </li>
          <li>
            Read and refer to the <a href="https://docs.wpilib.org/en/stable/" className="text-funkyGold hover:underline" target="_blank" rel="noopener noreferrer">WPILib Documentation</a>.
          </li>
        </ul>

        {/* Resources */}
        <h2 className="text-2xl font-bold text-funkyYellow mt-5">Resources:</h2>
        <ul className="list-disc list-inside text-funkyYellow text-left mx-auto mt-3">
          <li>
            <a
              href="https://docs.oracle.com/en/java/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              Official Java Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.w3schools.com/java/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              W3Schools Java Tutorial
            </a>
          </li>
          <li>
            <a
              href="https://www.tutorialspoint.com/java/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              TutorialsPoint Java Guide
            </a>
          </li>
          <li>
            <a
              href="https://docs.wpilib.org/en/stable/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-funkyGold hover:underline"
            >
              WPILib Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JavaOverview;
