import { Link } from "react-router";
import Hero from "./Hero";
import AnimatedPageWrapper from "../common/AnimatedPageWrapper";

const Home = () => {
  return (
    <AnimatedPageWrapper>
      <div className="flex flex-col lg:flex-row app-container pb-24 h-full min-h-screen items-center">
        <div className="home-section object-contain ">
          <Hero />
        </div>

        <div className="flex flex-col gap-8 justify-center lg:items-start items-center home-section">
          <h1 className="text-4xl md:text-6xl font-bold ">
            Hi, I’m Anel Danza – Full-Stack Developer
          </h1>

          <p className="md:text-xl">
            With a passion for turning ideas into functional, user-friendly
            solutions, I specialize in building robust web applications using
            modern technologies. From designing intuitive user experiences to
            crafting efficient backend systems, I bring a blend of creativity,
            technical expertise, and a commitment to delivering high-quality
            results.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              to="/portfolio"
              className="p-4 rounded-lg ring-1 ring-accent-bg bg-accent-bg hover:bg-accent-hover hover:ring-2 hover:ring-accent-hover text-accent-text"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className="p-4 rounded-lg ring-1 ring-accent-bg text-primary-text hover:ring-accent-bg hover:ring-2"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Home;
