import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java'; // Using Java mode
import 'ace-builds/src-noconflict/theme-twilight';

const RobotSimulator: React.FC = () => {
  const [code, setCode] = useState<string>(`
import edu.wpi.first.wpilibj.TimedRobot;
import edu.wpi.first.wpilibj.PWMVictorSPX;
import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;

public class Robot extends TimedRobot {

    private PWMVictorSPX motor;

    @Override
    public void robotInit() {
        motor = new PWMVictorSPX(0); // Initialize the motor on PWM port 0
    }

    @Override
    public void teleopPeriodic() {
        double speed = SmartDashboard.getNumber("Motor Speed", 0.0); // Get speed from the SmartDashboard

        motor.set(speed); // Set motor speed

        System.out.println("Motor running at speed: " + speed); // Output current speed to console

        SmartDashboard.putNumber("Motor Speed", speed); // Update the dashboard with current motor speed
    }
}
  `);

  const [robotSpeed, setRobotSpeed] = useState<number>(0);

  // Function to simulate robot movement (visual feedback)
  const handleCodeRun = () => {
    const moveMatch = code.match(/SmartDashboard\.getNumber\("Motor Speed", (\d+(\.\d+)?)\)/);
    if (moveMatch) {
      setRobotSpeed(parseFloat(moveMatch[1])); // Extract and update speed from code
    }
  };

  return (
    <div className=" bg-fu flex flex-col h-screen p-5">
      {/* Full-Width Section Above */}
      <div className="w-full bg-funkyGray2 text-white text-center p-5 rounded-lg mb-5">
        <h1 className="text-4xl text-funkyYellow font-bold">Welcome to the Robot Simulator</h1>
        <p className="text-lg text-funkyYellow mt-2">Edit the code on the left and visualize the motor's speed on the right</p>
    <div className=" bg-fu flex p-5 h-screen">
      {/* Left Column for the AceEditor */}
      <div className="flex-1 pr-5">
        <h2 className="text-3xl text-funkyYellow font-bold text-center mb-5">Robot Code</h2>
        <AceEditor
          mode="java"
          theme="twilight"
          name="codeEditor"
          value={code}
          fontSize={15}
          onChange={setCode}
          editorProps={{ $blockScrolling: true }}
          height="calc(85vh - 200px)"
          width="100%"
          className="rounded-lg"
        />
        <div className="text-center mt-3">
          <button
            className="bg-funkyYellow text-black p-3 rounded-lg shadow-md hover:bg-funkyGold"
            onClick={handleCodeRun}
          >
            Run Code
          </button>
        </div>
      </div>

      {/* Right Column for the Visualization */}
      <div className="flex-1 pl-5 flex flex-col h-full justify-start">
        <h2 className="text-3xl text-funkyYellow font-bold text-center mb-5">Simulator</h2>

        {/* Motor Speed Visualization */}
        <div className="bg-funkyGray rounded-lg p-5 flex flex-col justify-center" style={{ height: 'calc(85vh - 200px)', width: '100%' }}>
          <div className="w-full mb-3">
            <h3 className="text-center text-funkyYellow">Motor Speed</h3>
            <div className="relative w-full h-10 bg-black rounded-lg">
              <div
                className="absolute top-0 left-0 h-full bg-funkyYellow rounded-lg transition-all duration-300"
                style={{ width: `${Math.min(robotSpeed * 100, 100)}%` }}
              ></div>
            </div>
          </div>
          <p className="text-center text-funkyYellow">{robotSpeed * 100}% Speed</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RobotSimulator;
