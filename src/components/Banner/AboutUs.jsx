import React from "react";
import workerHero from '../../../public/workerHero.png'
import { motion } from "framer-motion";
import  bg1 from "../../../public/bg1.png"


const AboutUs = () => {
  return (
    <section
      id="about"
      className=" bg-cover bg-center relative"
      // style={{ backgroundImage: `url(${bg1})` }}
  
    >
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Crafting Spaces that Inspire and Endure
            </h1>
            <p className="text-lg">
              If you're looking for a general contractor who can bring your
              vision to life with exceptional design, quality, adherence to
              permits, safety, and efficiency, look no further. At
              <span className="text-xl font-bold text-blue-800 ">
                {" "}
                High Prestige Remodeling
              </span>
              , we specialize in both residential and commercial projects,
              turning your dreams into reality with craftsmanship and
              dedication.
            </p>
            <a
              href="sms:+16789344351?&body=Hello,%i'm%20interested%20in%20your%20services"
              className="primary-btn !mt-8"
              target="_blank"
            >
              Schedule Your Service Now !
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={workerHero}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
