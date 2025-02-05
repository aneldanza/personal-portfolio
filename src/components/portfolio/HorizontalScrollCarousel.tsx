import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { items } from "./constants";
// import ProjectItem from "./ProjectItem";

const HorizontalScrollCarousel = () => {
  const projectsContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsContainer,
  });
  // const [x, setX] = useState("");

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      console.log(v);
    });
  }, [scrollYProgress]);

  return (
    <div ref={projectsContainer} className="relative h-[300vh] bg-gradient-to">
      <div className="h-screen sticky top-0 bg-gradient-mid  flex  items-center overflow-hidden ">
        <motion.div
          style={{ x }}
          className="flex gap-10 touch-pan-x pl-8"
          // drag="x"
          // dragConstraints={{ left: -500, right: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {items.map((item) => (
            <div className="w-screen grid place-items-center" key={item.id}>
              <div className="text-white text-lg">Item</div>
            </div>
            // <ProjectItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
