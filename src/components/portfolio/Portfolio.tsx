import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import HireMeAnimation from "./hireMeAnimation";
import AnimatedPageWrapper from "../common/AnimatedPageWrapper";
import StarryBg from "./StarryBg";

// import ScrollIcon from "../about/ScrollIcon";
// import Footer from "../common/Footer";
import ProjectItem from "./ProjectItem";
import { items } from "./constants";

const PortfolioPage = () => {
  return (
    <AnimatedPageWrapper>
      <div className="w-screen h-[calc(100vh-6rem)] flex flex-col justify-center items-center bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to">
        <div className="flex justify-center items-center text-6xl md:text-8xl text-center">
          My Work
        </div>
        {/* <div className="bottom-16 absolute md:hidden">
          <ScrollIcon />
        </div> */}
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="w-full h-screen absolute top-1/4 md:top-24 left-0 ">
          <StarryBg />
        </div>
      </div>
      <div className="hidden lg:block">
        <HorizontalScrollCarousel />
      </div>
      <div className="flex flex-col gap-6 md:gap-12 p-4 items-center lg:hidden bg-gradient-to">
        {items.map((item) => (
          <div key={item.id} className="project-card">
            <ProjectItem item={item} />
          </div>
        ))}
      </div>
      <div className="h-screen w-screen flex flex-col gap-16 justify-center items-center text-center app-container bg-gradient-to-t from-gradient-from via-gradient-mid to-horizontal-scroll-to">
        <h1 className="text-4xl md:text-6xl lg:text-8xl flex flex-wrap">
          Do you have a project?
        </h1>

        <HireMeAnimation />
        {/* <Footer /> */}
      </div>
    </AnimatedPageWrapper>
  );
};

export default PortfolioPage;
