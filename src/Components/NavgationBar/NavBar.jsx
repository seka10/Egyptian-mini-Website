import React from "react";
import Logo from "../../assets/pngwing.com.png";
import { motion } from "framer-motion";
import { SlideBottom } from "../../Utility/Animation"; 

export const NavBar = () => {
  return (
    <div>
      <nav className="container flex flex-row justify-around items-center py-1 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
        <motion.a variants={SlideBottom(0.2)} initial="hidden" animate="visible" href="#">
          About
        </motion.a>
        <motion.a variants={SlideBottom(0.4)} initial="hidden" animate="visible" href="#">
          Home
        </motion.a>
        <motion.a variants={SlideBottom(0.6)} initial="hidden" animate="visible" href="#">
          Journal
        </motion.a>
        <motion.a variants={SlideBottom(0.9)} initial="hidden" animate="visible" href="#">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 opacity-50 hover:opacity-100 hover:scale-125 translate-all duration-500"
          />
        </motion.a>
        <motion.a variants={SlideBottom(0.6)} initial="hidden" animate="visible" href="#">
          Explore
        </motion.a>
        <motion.a variants={SlideBottom(0.4)} initial="hidden" animate="visible" href="#">
          Search
        </motion.a>
        <motion.a variants={SlideBottom(0.2)} initial="hidden" animate="visible" href="https://seka10.github.io/Portfolio-V3.0/">
          Another
        </motion.a>
      </nav>
    </div>
  );
};
export default NavBar;
