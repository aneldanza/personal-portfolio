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
    <motion.div className="project-item">
      <div className="project-content-container">
        <h1 className="project-title">{item.title}</h1>
        <div className="flex flex-col gap-4 lg:flex-row md:gap-6 lg:gap-8">
          <Link
            to={item.link ? item.link : item.repo}
            target="_blank"
            className="relative h-36 md:h-80 lg:h-[400px] xl:h-[500px] project-image-width bg-neutral-100 rounded hover:transition-transform  hover:shadow-lg hover:shadow-primary-text shrink-0 flex items-center justify-center"
          >
            <img src={item.img} alt={item.title} className="rounded" />
          </Link>

          <div className="project-description">
            <div className="text-sm md:text-base lg:text-lg">{item.desc()}</div>

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

            <div className="project-buttons-container">
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
