import { useState } from "react";
import { Link } from "react-router";
import NavLink from "./NavLink";
import Logo from "./Logo";
import GithubLogo from "./GitHubLogo";
import { LinkData } from "./types";
import LinkedInLogo from "./LinkedInLogo";
import MobileViewMenu from "./MobileViewMenu";

const list: LinkData[] = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between app-container text-xl relative">
      {/* Menu  */}
      <div className="hidden md:flex md:w-1/3 md:flex-shrink z-20">
        {list.map((item, index) => (
          <NavLink key={index} link={item} />
        ))}
      </div>
      {/* Logo  */}
      <div className="flex md:hidden lg:flex lg:justify-center xl:w-1/3 xl:justify-center relative">
        <Link to="/" className="block w-28 lg:w-30 xl:w-36 z-10">
          <Logo />
        </Link>
      </div>
      {/* Social Media Icons  */}
      <div className="hidden md:flex space-x-4 w-1/3 justify-end z-10">
        <Link
          to="https://github.com/aneldanza"
          target="_blank"
          className="cursor-pointer"
        >
          <GithubLogo />
        </Link>
        <Link
          to="https://www.linkedin.com/in/anel-danza-a9591868/"
          target="_blank"
          className="cursor-pointer"
        >
          <LinkedInLogo />
        </Link>
      </div>
      {/* Responsive Menu  */}
      <div className="md:hidden">
        <MobileViewMenu isOpen={isOpen} setIsOpen={setIsOpen} list={list} />
      </div>
    </div>
  );
};

export default NavBar;
