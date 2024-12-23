import React from "react";
import { motion } from "framer-motion";
export const Footer = () => {
  return (
    <div>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration:1.5,delay:0.5}}p className="relative z-20 flex justify-center mt-6 mb-6">
          2024 | All Rights Reserved to...
          <a href="https://github.com/seka10" className="hover:text-red-600 translate-all duration-1000 hover:scale-105">Sayed Ayman</a>
        </motion.p>
      
    </div>
  );
};

export default Footer;
