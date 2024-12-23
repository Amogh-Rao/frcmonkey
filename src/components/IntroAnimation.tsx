import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface IntroAnimationProps {
  onFinish: () => void; // Define the type for the onFinish prop
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onFinish }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onFinish(); // Call the callback to update state
    setTimeout(() => {
      navigate("/"); // Navigate to the Home Page after animation ends
    }, 1000); // Match this to the animation duration
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen bg-funkyGray flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={handleClick}
    >
      <motion.h1
        className="text-7xl font-extrabold text-funkyYellow mb-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Welcome to
      </motion.h1>
      <motion.h2
        className="text-8xl font-extrabold text-funkyYellow mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      >
        FRCMonkey
      </motion.h2>
      <motion.p
        className="text-2xl text-funkyYellow px-10 text-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        Explore. Simulate. Code. Your journey to mastering robot control starts here.
      </motion.p>

      {/* Sparkle Animations */}
      <motion.div
        className="absolute top-10 left-1/4 w-10 h-10 bg-funkyGold rounded-full"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-8 h-8 bg-funkyGold rounded-full"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.5,
          ease: "easeInOut",
        }}
      />

      {/* Click to Continue Text */}
      <motion.p
        className="absolute bottom-10 text-funkyYellow text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3,
          ease: "easeInOut",
        }}
      >
        Click anywhere to continue
      </motion.p>
    </motion.div>
  );
};

export default IntroAnimation;
