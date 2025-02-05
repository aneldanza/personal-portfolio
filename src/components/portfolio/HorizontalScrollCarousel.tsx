import { useRef } from "react";
import { useScroll } from "motion/react";

import ScrollingContent from "./ScrollingContent";

const HorizontalScrollCarousel = () => {
  const projectsContainer = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: projectsContainer,
  });

  return (
    <section
      ref={projectsContainer}
      className="h-[300vh] bg-gradient-to relative"
    >
      <div className="h-screen bg-gradient-to sticky top-0 flex items-start overflow-hidden ">
        <ScrollingContent scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
