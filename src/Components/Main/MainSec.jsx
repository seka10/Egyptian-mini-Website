import React from "react";
import VidPic from "../../assets/playvid.png";
import { motion } from "framer-motion";

export const MainSec = () => {
  return (
    <div>
      <section className="min-h-[900px] flex justify-center items-center bg-">
        {/* first section  */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10" style={{background:"radial-gradient(circle,rgba(0,0,0,0.3)50%, rgba(11,11,13,0.5)70%,rgba(11,11,13,0.8)90%)"}}></div>
        {/* text section  */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:0.9}} className="container relative z-20 text-center space-y-8">
          <h1 className="text-5xl md:text-8xl font-bold font-merriweather">
            Great OutDoors In Egypt 
          </h1>
          <p>Wonder often ... Wonder always </p>
          <img
            src={VidPic}
            className="h-20 w-20 cursor-pointer flex flex-col items-center justify-center text-center mx-auto opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110"/>
        </motion.div>
      </section>
    </div>
  );
};
