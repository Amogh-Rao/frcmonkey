import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java"; // Using Java mode
import "ace-builds/src-noconflict/theme-twilight";

const RobotSimulator: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [robotSpeed, setRobotSpeed] = useState<number>(0);
  const [dialogStep, setDialogStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const normalizeCode = (str: string) =>
    str.replace(/\s+/g, " ").trim(); // Normalize for comparison.

  const tutorialSteps = [
    {
      instruction: "Step 1: Begin by creating the main `Robot` class and import necessary packages.",
      requiredCode: `package frc.robot;\n\nimport edu.wpi.first.wpilibj.TimedRobot;`,
    },
    {
      instruction: "Step 2: Declare the `CANSparkMax` motor and initialize it in the `robotInit` method.",
      requiredCode: `package frc.robot;\n\nimport edu.wpi.first.wpilibj.TimedRobot;\nimport com.revrobotics.CANSparkMax;\nimport com.revrobotics.CANSparkMaxLowLevel.MotorType;\n\npublic class Robot extends TimedRobot {\n    private CANSparkMax motor;\n\n    @Override\n    public void robotInit() {\n        motor = new CANSparkMax(0, MotorType.kBrushless);\n    }\n}`,
    },
    {
      instruction: "Step 3: Implement the `teleopPeriodic` method to set the motor speed.",
      requiredCode: `package frc.robot;\n\nimport edu.wpi.first.wpilibj.TimedRobot;\nimport com.revrobotics.CANSparkMax;\nimport com.revrobotics.CANSparkMaxLowLevel.MotorType;\n\npublic class Robot extends TimedRobot {\n    private CANSparkMax motor;\n\n    @Override\n    public void robotInit() {\n        motor = new CANSparkMax(0, MotorType.kBrushless);\n    }\n\n    @Override\n    public void teleopPeriodic() {\n        double some_dc = 0.5;\n        motor.set(some_dc);\n    }\n}`,
    },
  ];

  const currentStep = tutorialSteps[dialogStep];

  const handleNext = () => {
    if (normalizeCode(code) === normalizeCode(currentStep.requiredCode)) {
      if (dialogStep < tutorialSteps.length - 1) {
        setDialogStep(dialogStep + 1);
      } else {
        setCompleted(true);
      }
    } else {
      showAlert("Your code doesn't match the required code for this step. Please review and try again.");
    }
  };

  const handlePrevious = () => {
    if (dialogStep > 0) {
      setDialogStep(dialogStep - 1);
      setCode(tutorialSteps[dialogStep - 1].requiredCode.trim());
    }
  };

  const handleCodeRun = () => {
    if (!completed && normalizeCode(code) !== normalizeCode(currentStep.requiredCode)) {
      showAlert("Your code doesn't match the required code. Make sure it's correct before running.");
      return;
    }

    const speedMatch = code.match(/double some_dc = (\d+(\.\d+)?);/);
    if (speedMatch) {
      setRobotSpeed(Math.min(parseFloat(speedMatch[1]), 1));
    } else {
      setRobotSpeed(0);
    }

    if (dialogStep === tutorialSteps.length - 1) {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCompleted(false);
    setDialogStep(0);
    setCode(tutorialSteps[0].requiredCode.trim());
    setRobotSpeed(0);
  };

  // Show the custom alert with a message
  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  return (
    <div className="bg-fu flex flex-col h-screen p-5">
      {/* Custom Alert */}
      {alertVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-funkyBlack text-funkyYellow p-5 rounded-lg shadow-lg z-50">
          <p>{alertMessage}</p>
          <button
            className="text-funkyBlack  bg-funkyYellow mt-3"
            onClick={() => setAlertVisible(false)}
          >
            Close
          </button>
        </div>
      )}
      
      {/* Instructions Section */}
      <div className="bg-funkyGray rounded-lg max-w-3xl mx-auto mb-5">
        <div className="p-5 text-white">
          {completed ? (
            <div className="text-center">
              <p className="text-lg text-funkyYellow mb-5">
                Congratulations! You've completed the tutorial. Have fun experimenting with different values in the `teleopPeriodic` method by changing 'some_dc'!
              </p>
              <button
                className="bg-funkyYellow text-black p-3 rounded-lg shadow-md hover:bg-funkyGold"
                onClick={handleRestart}
              >
                Restart Tutorial
              </button>
            </div>
          ) : (
            <>
              <p className="text-lg text-funkyYellow mb-3">{currentStep.instruction}</p>
              <div className="flex justify-between mt-3">
                <button
                  className="bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold"
                  onClick={handlePrevious}
                  disabled={dialogStep === 0}
                >
                  ← Previous
                </button>
                <div className="relative group">
                  <button
                    className="bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold"
                  >
                    Show Code
                  </button>
                  <div
                    className="absolute top-full text-left bg-black text-white text-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-50"
                    style={{ width: "470px" }}
                  >
                    <pre className="overflow-auto">{currentStep.requiredCode}</pre>
                  </div>
                </div>
                <button
                  className="bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold"
                  onClick={handleNext}
                >
                  Next →
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Editor and Simulator Section */}
      <div className="bg-fu flex p-5 h-full">
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

        <div className="flex-1 pl-5 flex flex-col h-full justify-start">
          <h2 className="text-3xl text-funkyYellow font-bold text-center mb-5">Simulator</h2>
          <div
            className="bg-funkyGray rounded-lg p-5 flex flex-col justify-center"
            style={{ height: "calc(85vh - 350px)", width: "100%" }}
          >
            <div className="w-full mb-3">
              <h3 className="text-center text-funkyYellow">Motor Speed</h3>
              <div className="relative w-full h-10 bg-black rounded-lg">
                <div
                  className="absolute top-0 left-0 h-full bg-funkyYellow rounded-lg transition-all duration-300"
                  style={{ width: `${robotSpeed * 100}%` }}
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
