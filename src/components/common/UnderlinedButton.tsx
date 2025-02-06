import { Link } from "react-router";
import { type FC } from "react";

interface UnderlinedButtonProps {
  to: string;
  title: string;
}

const UnderlinedButton: FC<UnderlinedButtonProps> = ({ to, title }) => {
  return (
    <Link to={to} target="_blank" className="cursor-pointer group">
      <button className="project-item-button relative inline-block overflow-hidden">
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-bg transition-all duration-400 ease-out group-hover:w-full"></span>
      </button>
    </Link>
  );
};

export default UnderlinedButton;
