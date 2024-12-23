import React from "react";
import { motion } from "framer-motion";

interface SimulationIntroProps {
  onComplete: () => void;
}

const SimulationIntro: React.FC<SimulationIntroProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen bg-funkyGray flex flex-col justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Welcome Text */}
      <motion.h1
        className="text-6xl font-extrabold text-funkyYellow mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Welcome to Your First Simulation!
      </motion.h1>
      <motion.p
        className="text-2xl text-funkyYellow font-semibold px-10 text-center mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
        }}
      >
        Edit code on the left and see it run on the right!
      </motion.p>

      {/* Features List */}
      <motion.ul
        className="text-lg text-funkyYellow text-center space-y-3 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        <li>⚡ Write your robot's code in Java</li>
        <li>⚙️ Adjust motor speeds in real time</li>
        <li>🎯 See your code run directly in the simulator</li>
      </motion.ul>

      {/* Exit Button */}
      <motion.button
        className="bg-funkyYellow text-black px-5 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-funkyGold"
        onClick={onComplete}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          ease: "easeOut",
        }}
      >
        Start Simulation
      </motion.button>
    </motion.div>
  );
};

export default SimulationIntro;
