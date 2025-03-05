import { useRef } from "react";
import { useScroll } from "motion/react";

import ScrollingContent from "./ScrollingContent";

const HorizontalScrollCarousel = () => {
  const projectsContainer = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: projectsContainer,
  });

  return (
    <section ref={projectsContainer} className="h-[300vh]  relative">
      <div className="horizontal-scroll-container">
        <ScrollingContent scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
