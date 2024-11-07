import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-scroll";
import { FaLocationDot } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsChatSquareText } from "react-icons/bs";

import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-10  overflow-x-hidden">
      {/* bg-[#f7f7f7]  en el <footer> si no gusta el fondo, se puede poner esta*/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
          <div className="flex items-center gap-2">
            <img src="/icon.svg" alt="logo-ct" className="w-32" />
            <FaLocationDot className="text-xl" />
            <h1 className="text-lg">Atlanta, GA</h1>
          </div>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as={Link}
                to="home"
                smooth={true}
                duration={500}
                color="blue-gray"
                className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Home
              </Typography>
            </li>
            <li>
              <Typography
                as={Link}
                to="services"
                smooth={true}
                duration={500}
                color="blue-gray"
                className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Service
              </Typography>
            </li>
            <li>
              <Typography
                as={Link}
                to="important"
                smooth={true}
                duration={500}
                color="blue-gray"
                className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Important
              </Typography>
            </li>
            <li>
              <Typography
                as={Link}
                to="about"
                smooth={true}
                duration={500}
                color="blue-gray"
                className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-5 border-blue-gray-50" />
        {/* Social Media Section */}
        <div className="flex justify-center gap-6 my-4">
          <a
            href="https://www.instagram.com/highprestigeremodeling?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-#3f729b  hover:instagram-color transition-colors text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/+16789344351"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-gray-600 hover:text-green-500 transition-colors text-2xl"
          >
            <BsWhatsapp />
          </a>
          <a
            href="sms:+16789344351?&body=Hello,%i'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-gray-600 hover:text-red-500 transition-colors text-2xl"
          >
            <BsChatSquareText />
          </a>
          <a
            href="mailto:highprestigeremodeling@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-gray-600 hover:text-blue-500 transition-colors text-2xl"
          >
            <MdMailOutline />
          </a>
        </div>

        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2024 High Prestige Remodeling. All rights reserved.
        </Typography>
      </motion.div>
    </footer>
  );
};

export default Footer;
