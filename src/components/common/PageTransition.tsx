import { motion } from "motion/react";
import { useLocation } from "react-router";

const PageTransition = () => {
  const { pathname } = useLocation();
  return (
    <>
      <motion.div
        className="h-screen w-screen fixed bg-primary-text rounded-b-[100px] z-40"
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 left-0 m-auto text-accent-text text-8xl w-fit h-fit z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {pathname.replace("/", "")}
      </motion.div>
    </>
  );
};

export default PageTransition;
