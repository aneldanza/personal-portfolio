import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gradient-from via-gradient-mid to-gradient-to text-primary-text relative">
      <div className="h-24">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
