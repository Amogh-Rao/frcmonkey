import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java"; // Using Java mode
import "ace-builds/src-noconflict/theme-twilight";
import SimulationIntro from "./SimulationIntro"; // Import the SimulationIntro component

const RobotSimulator: React.FC = () => {
  const [code, setCode] = useState<string>("package frc.robot");
  const [robotSpeed, setRobotSpeed] = useState<number>(0);
  const [dialogStep, setDialogStep] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [introCompleted, setIntroCompleted] = useState<boolean>(false); // New state to track intro completion

  const normalizeCode = (str: string) =>
    str.replace(/\s+/g, " ").trim(); // Normalize for comparison.

  const tutorialSteps = [
    {
      instruction: `In this simulation, you'll learn how to write Java code to control a motor using the <i>TimedRobot</i> framework.
      
      Let's start by adding the package declaration. This tells Java where this class belongs. For our program today, let's call the package <i>frc.robot</i>.`,
      requiredCode: `package frc.robot;`,
    },
    {
      instruction: `Next, we will import the <i>TimedRobot</i> library. This library provides a structured way to create and manage a robot program in FRC.`,
      requiredCode: `package frc.robot;\n\nimport edu.wpi.first.wpilibj.TimedRobot;`,
    },
    {
      instruction: `Now, let's create a new class called <i>Robot</i> that extends <i>TimedRobot</i>. The <i>TimedRobot</i> class allows us to implement methods that are automatically called during different phases of the robot's operation, like initialization and the teleoperated (manual controlled) time periods.`,
      requiredCode: `package frc.robot;\n\nimport edu.wpi.first.wpilibj.TimedRobot;\n\npublic class Robot extends TimedRobot {\n\n}`,
    },
    {
      instruction: `Now that we have our main class, let's prepare for motor control! We will need to import some more libraries for working with a motor controller. Import <i>CANSparkMax</i> and <i>CANSparkMaxLowLevel</i> into your program (Click "Show Expected Code" for guidance).`,
      requiredCode: `package frc.robot;\n\nimport edu.wpi.first.wpilibj.TimedRobot;\nimport com.revrobotics.CANSparkMax;\nimport com.revrobotics.CANSparkMaxLowLevel.MotorType;\n\npublic class Robot extends TimedRobot {\n\n}`,
    },
    {
      instruction: `Now, we will declare a motor object as a class-level variable in the <i>TimedRobot</i> method. This object represents the motor we want to control. In the <i>robotInit</i> method, we will initialize the motor, specifying its ID (0) and type (brushless motor).`,
      requiredCode: `package frc.robot;\n\nimport edu.wpi.first.wpilibj.TimedRobot;\nimport com.revrobotics.CANSparkMax;\nimport com.revrobotics.CANSparkMaxLowLevel.MotorType;\n\npublic class Robot extends TimedRobot {\n    private CANSparkMax motor;\n\n    @Override\n    public void robotInit() {\n        motor = new CANSparkMax(0, MotorType.kBrushless);\n    }\n}`,
    },
    {
      instruction: `Finally, we will implement the <i>teleopPeriodic</i> method. This method runs repeatedly while the robot is under manual control. We will set the motor speed using a variable called <i>some_dc</i>, which stands for some_DutyCycle. This value ranges from -1 (full speed reverse) to 1 (full speed forward).`,
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
      showAlert(
        "Your code doesn't match the required code for this step. Please review and try again."
      );
    }
  };

  const handlePrevious = () => {
    if (dialogStep > 0) {
      setDialogStep(dialogStep - 1);
      setCode(tutorialSteps[dialogStep - 1].requiredCode.trim());
    }
  };

  const handleCodeRun = () => {
    if (
      !completed &&
      normalizeCode(code) !== normalizeCode(currentStep.requiredCode)
    ) {
      showAlert(
        "Your code doesn't match the required code. Make sure it's correct before running."
      );
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

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleIntroComplete = () => {
    setIntroCompleted(true);
  };

  return (
    <div className="bg-fu flex flex-col h-screen p-5">
      {!introCompleted && <SimulationIntro onComplete={handleIntroComplete} />}
      {alertVisible && (
        <div className="fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-funkyBlack text-funkyYellow p-5 rounded-lg shadow-lg z-50">
          <p>{alertMessage}</p>
          <div className="flex justify-center mt-3">
            <button
              className="text-funkyBlack bg-funkyYellow"
              onClick={() => setAlertVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="bg-funkyGray font-semibold rounded-lg max-w-3xl mx-auto mb-5">
        <div className="p-5 text-white">
          {completed ? (
            <div className="text-center">
              <h1 className="text-funkyYellow mb-4 font-bold">
                Congratulations!
              </h1>
              <p className="text-lg text-funkyYellow mb-5">
                You've completed the tutorial! Try modifying the motor speed in 
                <i> teleopPeriodic</i>.
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
              <p className="text-lg text-funkyYellow mb-3">
                <span dangerouslySetInnerHTML={{ __html: currentStep.instruction }} />
              </p>
              <div className="flex justify-between mt-3">
                <button
                  className="bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold"
                  onClick={handlePrevious}
                  disabled={dialogStep === 0}
                >
                  ← Previous
                </button>
                {dialogStep > 0 && (
                  <div className="relative group">
                    <button className="bg-funkyYellow text-black p-2 rounded-lg shadow-md hover:bg-funkyGold">
                      Show Expected Code
                    </button>
                    <div
                      className="absolute top-full text-left bg-black text-white text-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-50"
                      style={{ width: "470px" }}
                    >
                      <pre className="overflow-auto">
                        {currentStep.requiredCode}
                      </pre>
                    </div>
                  </div>
                )}
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
      <div className="bg-fu flex p-5 h-full">
        <div className="flex-1 pr-5">
          <h2 className="text-3xl text-funkyYellow font-bold text-center mb-5">
            Robot Code
          </h2>
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
          <h2 className="text-3xl text-funkyYellow font-bold text-center mb-5">
            Simulator
          </h2>
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
            <p className="text-center text-funkyYellow">
              {robotSpeed * 100}% Speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotSimulator;
