import { motion, useScroll, useInView } from "motion/react";
import { useRef } from "react";
import { skills, jobs } from "./constants";
import ExperienceItem from "./ExperienceItem";
import ScrollIcon from "./ScrollIcon";
import AnimatedPageWrapper from "../common/AnimatedPageWrapper";
import Innovation from "./Innovation";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillContainerRef = useRef<HTMLDivElement>(null);
  const isSkillContainerInView = useInView(skillContainerRef, {
    amount: 0.3,
  });

  const experienceContainerRef = useRef<HTMLDivElement>(null);
  const isExperienceContainerInView = useInView(experienceContainerRef, {
    amount: 0.3,
  });
  return (
    <AnimatedPageWrapper>
      <div
        ref={containerRef}
        className="h-[calc(100vh-6rem)]overflow-y-scroll flex relative"
      >
        <div className=" p-4 sm:p-8 md:p-12 lg:p-20 xl:p-42 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="about-section">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            <p className="text-xl">
              I’m a passionate full-stack developer with a knack for solving
              complex problems and creating seamless digital experiences. I’ve
              built everything from dynamic web applications to custom tools
              that help businesses thrive. I love combining clean code,
              thoughtful design, and scalable solutions to turn ideas into
              reality. Beyond coding, I enjoy exploring new tech trends,
              spending time with my family and cats. Whether collaborating with
              teams or tackling solo projects, I’m always driven by curiosity,
              innovation, and a desire to deliver meaningful results.
            </p>

            <ScrollIcon />
          </div>

          <div ref={skillContainerRef} className="about-section">
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillContainerInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillContainerInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              {skills.map((skill) => (
                <div key={skill} className="skill-tag">
                  {skill}
                </div>
              ))}
            </motion.div>

            <ScrollIcon />
          </div>

          <div ref={experienceContainerRef} className="about-section pb-48">
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceContainerInView ? { x: 0 } : {}}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.div>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceContainerInView ? { x: 0 } : {}}
            >
              <ExperienceItem job={jobs[0]} side="left" />
              <ExperienceItem job={jobs[1]} side="right" />
              <ExperienceItem job={jobs[2]} side="left" />
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2 h-[calc(100vh-6rem)]">
          <Innovation scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default AboutPage;
