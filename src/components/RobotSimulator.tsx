import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java'; // Using Java mode
import 'ace-builds/src-noconflict/theme-twilight';

const RobotSimulator: React.FC = () => {
  const [code, setCode] = useState<string>(`
package frc.robot;

import edu.wpi.first.wpilibj.TimedRobot;
import com.revrobotics.CANSparkMax;
import com.revrobotics.CANSparkMaxLowLevel.MotorType;

public class Robot extends TimedRobot {
    private CANSparkMax motor;

    @Override
    public void robotInit() {
        motor = new CANSparkMax(0, MotorType.kBrushless);
    }

    @Override
    public void teleopPeriodic() {
        double some_dc = 0.5;
        motor.set(some_dc);
    }
}
  `);

  const instructions = [
    "Welcome to the Robot Simulator! Edit the code on the left and visualize the motor's speed on the right.",
    "Use the editor to modify motor behavior. Try changing the duty cycle in the teleopPeriodic method.",
    "Click the 'Run Code' button to apply your changes and see the results in the simulator.",
    "Experiment with different values to better understand how motor speed is controlled in FRC."
  ];

  const [robotSpeed, setRobotSpeed] = useState<number>(0.5);
  const [dialogStep, setDialogStep] = useState<number>(0);

  // Function to simulate robot movement (visual feedback)
  const handleCodeRun = () => {
    const speedMatch = code.match(/double some_dc = (\d+(\.\d+)?);/);
    if (speedMatch) {
      setRobotSpeed(parseFloat(speedMatch[1])); // Extract and update speed from code
    }
  };
  
  const handleNext = () => {
    if (dialogStep < instructions.length - 1) {
      setDialogStep(dialogStep + 1);
    }
  };

  // Handle previous instruction step
  const handlePrevious = () => {
    if (dialogStep > 0) {
      setDialogStep(dialogStep - 1);
    }
  };

  return (
    <div className="bg-fu flex flex-col h-screen p-5">
      {/* Instructions Section */}
      <div className="bg-funkyGray rounded-lg max-w-3xl mx-auto">
      <div className="w-full max-w-4xl bg-funkyGray2 text-white text-center mx-auto rounded-lg mb-3">
        <div className="bg-funkyGray2 rounded-lg p-5 mt-5">
          <p className="text-lg text-funkyYellow mb-3">{instructions[dialogStep]}</p>
          <div className="flex justify-between mt-3">
            <button
              className="bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold"
              onClick={handlePrevious}
              disabled={dialogStep === 0}
            >
              ← Previous
            </button>
            <button
              className="bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold"
              onClick={handleNext}
              disabled={dialogStep === instructions.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
      </div>

      <div className="bg-fu flex p-5 h-full">
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
            height="calc(85vh - 350px)"
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
          <div className="bg-funkyGray rounded-lg p-5 flex flex-col justify-center" style={{ height: 'calc(85vh - 350px)', width: '100%' }}>
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
  );
};

export default RobotSimulator;
