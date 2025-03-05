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
    <motion.div style={{ x }} className="flex gap-20 h-full">
      {items.map((item) => (
        <div key={item.id} className="project-card">
          <ProjectItem item={item} />
        </div>
      ))}
    </motion.div>
  );
};

export default ScrollingContent;
