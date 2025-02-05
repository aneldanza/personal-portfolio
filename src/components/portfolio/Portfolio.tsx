import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import HireMeAnimation from "./hireMeAnimation";
import AnimatedPageWrapper from "../common/AnimatedPageWrapper";
import StarryBg from "./StarryBg";
import ScrollIcon from "../about/ScrollIcon";

const PortfolioPage = () => {
  return (
    <div>
      <div className="h-screen bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to"></div>
      <HorizontalScrollCarousel />
      <div className="h-screen bg-gradient-to-t from-gradient-from via-gradient-mid to-gradient-to"></div>
    </div>
  );
};

export default PortfolioPage;
