import { type FC } from "react";
import { Link, useLocation } from "react-router";
import { LinkData } from "./types";

interface NavLinkProps {
  link: LinkData;
}

const NavLink: FC<NavLinkProps> = ({ link }) => {
  const pathName = useLocation().pathname;

  return (
    <Link
      className={`rounded px-2 py-1 ${
        pathName === link.url &&
        "bg-accent-secondary-bg text-accent-text hover:text-accent-text "
      }`}
      to={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
