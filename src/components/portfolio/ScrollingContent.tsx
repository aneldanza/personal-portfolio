import { type FC } from "react";
import { motion, useTransform, MotionValue } from "motion/react";
import { items } from "./constants";
import ProjectItem from "./ProjectItem";

interface ScrollingContentProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollingContent: FC<ScrollingContentProps> = ({ scrollYProgress }) => {
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
  return (
    <motion.div style={{ x }} className="flex gap-10">
      {items.map((item) => (
        <ProjectItem item={item} key={item.id} />
      ))}
    </motion.div>
  );
};

export default ScrollingContent;
