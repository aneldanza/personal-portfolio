import { type FC } from "react";
import { Link } from "react-router";
import { Job } from "./types";

interface JobItemProps {
  job: Job;
}

const JobItem: FC<JobItemProps> = ({ job }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-semibold bg-accent-secondary-bg text-accent-text p-3 rounded-b-lg rounded-s-lg">
        {job.title}
      </div>

      <div className="text-sm p-3 italic">{job.description}</div>

      <div className="text-sm p-3 font-semibold text-accent-bg">{job.date}</div>

      <Link
        to={job.companyLink}
        target="_blank"
        className="text-sm p-1 bg-accent-secondary-bg text-accent-text rounded font-semibold w-fit cursor-pointer hover:bg-accent-hover"
      >
        {job.company}
      </Link>
    </div>
  );
};

export default JobItem;
