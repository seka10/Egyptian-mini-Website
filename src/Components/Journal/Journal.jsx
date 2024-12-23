import React from "react";
import Image from "../../assets/Img (1).jpg";
import Image0 from "../../assets/Img (6).jpg";
import { motion } from "framer-motion";

const JournalData = [
  {
    id: 1,
    title: "Obelisks",
    about:
      "Egypt’s obelisks, towering stone structures that rise high above their surroundings, were built to honor gods, goddesses, and pharaohs. They stand as lasting symbols of Egypt's extraordinary architectural genius, with intricate inscriptions that recount stories of victories, divine connections, and the pharaohs' powerful rule. From Luxor to Cairo, these majestic obelisks continue to awe and inspire visitors from around the world, reflecting the grandeur of ancient Egypt’s cultural heritage and its profound historical legacy, which still shapes the nation’s identity today.",
    date: "15th OF Feb 2008",
    url: "#",
    image: Image,
    delay: 0.5,
  },
  {
    id: 2,
    title: "Old Buildings",
    about:
      "Egypt is indeed a country rich in history, and its ancient buildings are a testament to its deep cultural heritage. From the majestic pyramids of Giza, which are considered one of the Seven Wonders of the Ancient World, to the temples of Luxor and Aswan that tell stories of the Pharaonic civilization along the Nile. In Cairo, the Citadel and the Al-Azhar Mosque stand as symbols of the Islamic era and its influence on the region. These places are not just tourist attractions; they reflect the living spirit and profound history of the Egyptian people.",
    date: "4TH OF June 2011",
    url: "#",
    image: Image0,
    delay: 0.9,
  },
];

export const Journal = () => {
  return (
    <div>
      <section className="mt-40 container" id="journal">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="space-y-4 mx-auto md:max-w-[650px] text-center"
        >
          <p className="font-bold text-3xl">Know Our Famous Places</p>
          <p>
            Our favorite stories about public lands and opportunities for you to
            get involved in protecting your outdoor experience.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="gap-14 grid grid-cols-1 md:grid-cols-2 mt-20">
          {JournalData.map((data) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: data.delay }}
              className="flex flex-col bg-white shadow-md rounded-lg h-full overflow-hidden"
            >
              {/* Image Section */}
              <div className="translate-all duration-700 overflow-hidden hover:scale-110">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* Card Section Details */}
              <div className="flex flex-col flex-grow justify-between space-y-4 px-12 py-6 text-center">
                <p className="font-semibold text-black text-lg uppercase">{data.title}</p>
                <p className="font-semibold text-xl">{data.date}</p>
                <p className="text-gray-600">{data.about}</p>
              </div>

              {/* Footer Section */}
              <div>
                <button className="block mx-auto mt-6 font-bold text-BrandBlue uppercase">
                  See More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
