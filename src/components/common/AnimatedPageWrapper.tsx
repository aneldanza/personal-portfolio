import { motion } from "motion/react";
import { type FC } from "react";

interface AnimatedPageWrapperProps {
  children: React.ReactNode;
}

const AnimatedPageWrapper: FC<AnimatedPageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
