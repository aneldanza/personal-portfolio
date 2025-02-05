import { type FC } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { LinkData } from "./types";

interface MobileViewMenuProps {
  list: LinkData[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileViewMenu: FC<MobileViewMenuProps> = ({
  list,
  isOpen,
  setIsOpen,
}) => {
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "white",
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "white",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      {/* Menu button */}
      <button
        className="flex flex-col h-8 justify-between z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          variants={topVariants}
          animate={isOpen ? "opened" : "closed"}
          className="h-1 w-10 bg-black rounded origin-left"
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={isOpen ? "opened" : "closed"}
          className="h-1 w-10 bg-black rounded origin-left"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={isOpen ? "opened" : "closed"}
          className="h-1 w-10 bg-black rounded origin-left"
        ></motion.div>
      </button>

      {/* Menu */}

      {isOpen && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 right-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center space-y-8 text-4xl z-40"
        >
          {list.map((item, index) => (
            <motion.div variants={listItemVariants} key={index}>
              <Link to={item.url} onClick={() => setIsOpen(!isOpen)}>
                {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default MobileViewMenu;
