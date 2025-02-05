import { Route, Routes } from "react-router";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to text-primary-text relative">
      <div className="h-24">
        <NavBar />
      </div>
      <div className="h-[calc(100vh-6rem)]">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
