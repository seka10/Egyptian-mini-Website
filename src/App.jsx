import React from "react";
import NavBar from "../src/Components/NavgationBar/NavBar";
import MainImg from "./assets/ancient-sandstone-ruins-majestic-architecture-eroded-rock-formations-generated-by-ai.jpg";
import { MainSec } from "./Components/Main/MainSec";
import Explore from "./Components/Explore/Explore";
import { Journal } from "./Components/Journal/Journal";
import { Footer } from "./Components/Footer/Footer";

const bgImg = {
  backgroundImage: `url(${MainImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position:"relative",
};
export const App = () => {
  return (
    <div className="bg-BrandDark text-white overflow-x-hidden">
      <div style={bgImg}>
        <NavBar />
        <MainSec/>
      </div>
        <Explore/>
        <Journal/>
        <Footer/>
    </div>
  );
};
export default App;
