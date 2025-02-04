import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to text-primary-text relative overflow-scroll">
      <div className="h-24">
        <NavBar />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
