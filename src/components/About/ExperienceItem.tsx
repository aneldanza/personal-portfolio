import { type FC } from "react";
import JobItem from "./JobItem";
import LineElement from "./LineElement";
import { Job } from "./types";

interface ExperienceItemProps {
  job: Job;
  side: "left" | "right";
}

const ExperienceItem: FC<ExperienceItemProps> = ({ job, side }) => {
  return (
    <div className="flex justify-between h-content">
      <div className="w-1/3">
        {side === "left" ? <JobItem job={job} /> : <div></div>}
      </div>
      <div className="w-1/6">
        <LineElement />
      </div>
      <div className="w-1/3">
        {side === "right" ? <JobItem job={job} /> : <div></div>}
      </div>
    </div>
  );
};

export default ExperienceItem;
