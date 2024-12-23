import React from "react";
import Img1 from "../../assets/Img (3).jpg";
import Img2 from "../../assets/Img (5).jpg";
import Img3 from "../../assets/Img (4).jpg";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../../Utility/Animation";
const ExploreData = [
  {
    id: 1,
    title: "Obelisk at Hatshepsut Temple",
    Place: "Luxor",
    url: "#",
    delay: "0.3",
    image: Img1,
  },
  {
    id: 2,
    title: "Imam Hussein bin Ali Mosque ",
    Place: "Cairo",
    url: "#",
    delay: "0.6",
    image: Img2,
  },
  {
    id: 3,
    title: "Temple of Khnum",
    Place: "Aswan",
    url: "#",
    delay: "0.9",
    image: Img3,
  },
];
export const Explore = () => {
  return (
    <div>
      <section className="mt-10 container" id="explore">
        {/* Header sec */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="space-y-4 mx-auto md:max-w-[650px] text-center"
        >
          <p className="text-3xl">Explore Our Culture </p>
          <p>
            Egypt, a land of ancient history and natural beauty, offers a unique
            blend of the past and stunning landscapes. From the Pyramids of Giza
            to the Red Sea beaches, every corner tells a story. It’s the perfect
            destination for adventurers and explorers seeking unforgettable
            experiences, surrounded by a warm and welcoming people eager to
            share the magic of this land.
          </p>
        </motion.div>
        {/* Card sec */}
        <motion.div className="place-items-center gap-6 grid grid-cols-1 md:grid-cols-3 mt-20">
  {ExploreData.map((data, index) => (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1, 
        delay: index * 1,
      }}
      className="relative"
    >
      <img
        src={data.image}
        alt={data.title}
        className="w-[380px] h-[550px] object-cover"
      />
      <div className="bottom-0 absolute inset-0 bg-[rgba(0,0,0,0.15)] w-full">
        <div className="flex flex-col justify-end items-center space-y-1 py-6 h-full">
          <h3 className="font-semibold text-2xl text-white">{data.title}</h3>
          <p className="text-white uppercase">{data.Place}</p>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>


        {/* Footer sec */}
        <div className="">
            <button className="block mx-auto mt-10 font-bold text-BrandBlue uppercase">See More </button>
        </div>
      </section>
    </div>
  );
};
export default Explore;
