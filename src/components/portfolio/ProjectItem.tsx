import { type FC } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Project } from "./types";
import UnderlinedButton from "../common/UnderlinedButton";

interface ProjectItemProps {
  item: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ item }) => {
  return (
    <motion.div
      className={`w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)] h-screen flex justify-center items-start pt-8  `}
    >
      <div className="flex flex-col gap-8 text-primary-text">
        <h1 className="text-xl md:text-4xl lg:text-6xl xl:text-8xl font-bold ">
          {item.title}
        </h1>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-8">
          <Link
            to={item.link ? item.link : item.repo}
            target="_blank"
            className="relative h-36 md:h-80 lg:h-[500px] xl:h-[600px] project-image-width bg-neutral-100 rounded hover:transition-transform  hover:shadow-lg hover:shadow-primary-text shrink-0 flex items-center justify-center"
          >
            <img src={item.img} alt={item.title} className="rounded" />
          </Link>

          <div className="project-text-width md:w-1/2 lg:text-lg flex flex-col gap-8">
            <div className="">{item.desc()}</div>

            <div className="flex flex-wrap gap-3 ">
              {item.tools.map((tool, index) => (
                <span
                  key={index}
                  className="text-xs lg:text-sm text-primary-text ring ring-accent-secondary-bg px-1.5 py-1  rounded-md bg-accent-text/50 font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="w-full h-0.25 bg-primary-text"></div>

            <div className="flex justify-start gap-8 pr-8">
              {item.link && (
                <UnderlinedButton to={item.link} title="Visit Site" />
              )}
              <UnderlinedButton to={item.repo} title="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
