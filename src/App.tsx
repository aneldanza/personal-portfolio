import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/Footer";
import LogoGlow from "./components/common/logoGlow";
import PageTransition from "./components/common/PageTransition";

const App = () => {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-screen bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to text-primary-text relative"
      >
        <PageTransition pathname={pathname} />
        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
        <div className="absolute z-0 w-0 lg:w-full h-36 top-0 left-0 min-w-30 md:hidden lg:flex">
          <LogoGlow />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default App;
