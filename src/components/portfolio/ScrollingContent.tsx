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
    <motion.div style={{ x }} className="flex gap-4">
      {items.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </motion.div>
  );
};

export default ScrollingContent;
