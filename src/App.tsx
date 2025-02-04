import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to text-primary-text relative overflow-scroll">
      <div className="h-24">
        <NavBar />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
