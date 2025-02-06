import { motion } from "motion/react";

const PageTransition = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <motion.div
        className="h-screen w-screen fixed bg-primary-text rounded-b-[100px] z-40"
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 left-0 m-auto text-accent-text text-6xl lg:text-8xl w-fit h-fit z-50"
        initial={{ opacity: 1, display: "block" }}
        animate={{ opacity: 0, display: "none" }}
        exit={{ opacity: 0, display: "none" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {pathname.replace("/", "")}
      </motion.div>

      <motion.div
        className="h-screen w-screen fixed bg-primary-text rounded-t-[100px] bottom-0 z-30"
        initial={{ height: "140vh" }}
        animate={{ height: "0vh", transition: { delay: 0.5 } }}
      />
    </>
  );
};

export default PageTransition;
