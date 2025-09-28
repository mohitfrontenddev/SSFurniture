import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "/assets/logo.svg";
export function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalDurationMs = 6000; // total animation duration 6 seconds
    const intervalTime = 30; // update every 30ms
    const increment = 100 / (totalDurationMs / intervalTime);

    const interval = setInterval(() => {
      setPercentage((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 bg-primary dark:bg-teritory flex flex-col items-center justify-center gap-6 z-50 "
    >
        <div className="flex items-center gap-4">
       <img src={logo} alt="Sonu Steel Furniture Talwara Logo" className="w-80 mt-4" /> 
       </div>
      {/* Animated Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-6xl font-bold text-dark dark:text-text-dark absolute right-4 bottom-4"
      >
        {Math.floor(percentage)}%
      </motion.div>
     
    </motion.div>
  );
}
