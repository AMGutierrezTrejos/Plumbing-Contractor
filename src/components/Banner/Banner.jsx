import React from "react";
import bg2 from "../../../public/bg1.png";
import workerHero from "../../../public/workerHero.png";
import { GrUserExpert } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { GiBugleCall } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="important"
      className=" bg-cover bg-center relative"
      // style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={workerHero}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Schedule with us and get exclusive benefits
            </motion.h1>
            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-500 duration-300 hover:shadow-2xl"
              >
                <FaCheck className="text-2xl" />
                <p className="text-lg">
                  Free Estimates. No Extra Charge For Evening Service
                </p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-500 duration-300 hover:shadow-2xl"
              >
                <HiLocationMarker className="text-2xl" />
                <p className="text-lg">Always Near Your Location</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-500 duration-300 hover:shadow-2xl"
              >
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Extensive Guarantee For Each Service</p>
              </motion.div>
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-red-500 duration-300 hover:shadow-2xl"
              >
                <GiBugleCall className="text-2xl" />
                <p className="text-lg font-bold">
                  Calle Us For More Benefits !!!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
