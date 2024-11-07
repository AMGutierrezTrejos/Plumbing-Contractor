import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavbarMenu = [
  { id: 1, title: "Home", path: "home" },
  { id: 2, title: "Services", path: "services" },
  { id: 3, title: "Important", path: "important" },
  // { id: 4, title: "Our Team", path: "team" },
  { id: 5, title: "About Us", path: "about" },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-10 px-6 flex justify-between items-center"
      >
        <div className="flex items-center justify-center gap-3">
          <img src="/icon.svg" alt="logo" height={40} width={50} />
          <h1 className="font-bold text-2xl">High Prestige Remodeling</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer inline-block py-2 px-1 hover:text-blue-500 duration-300"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className="primary-btn">
              <a href="tel:+16789344351">CALL NOW +1 (678) 934-4351</a>
            </button>
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
