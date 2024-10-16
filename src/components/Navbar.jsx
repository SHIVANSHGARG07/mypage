import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Motion variants for animation
  const logoVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const linksVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <nav className="sticky top-0 z-50 py-3  backdrop-blur-lg">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <motion.img
              className="h-[6vw] w-[6vw] mr-2 sm:h-[3vw] sm:w-[3vw] sm:ml-[4vw]"
              src={logo}
              alt=""
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="text-2xl tracking-tight font-bold"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="no-underline text-white ">
                Shivansh Garg
              </Link>
            </motion.span>
          </div>

          <ul className="hidden lg:flex ml-[2vw] mr-[2vw] space-x-12 mt-3">
            <motion.li
              variants={linksVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <Link to="/report" className="text-white text-[1.3vw] font-semibold hover:text-gray-300">About</Link>
            </motion.li>
            <motion.li
              variants={linksVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <Link to="/showReports" className="text-white text-[1.3vw] font-semibold hover:text-gray-300">Work</Link>
            </motion.li>
            <motion.li
              variants={linksVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <Link to="/maps" className="text-white text-[1.3vw]  font-semibold hover:text-gray-300">Contact</Link>
            </motion.li>
          </ul>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#020309] mt-[2vw] w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <motion.li
                variants={linksVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <Link to="/report" onClick={toggleNavbar} className="text-white hover:text-gray-300">About</Link>
              </motion.li>
              <motion.li
                variants={linksVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <Link to="/showReports" onClick={toggleNavbar} className="text-white hover:text-gray-300">Work</Link>
              </motion.li>
              <motion.li
                variants={linksVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <Link to="/maps" onClick={toggleNavbar} className="text-white hover:text-gray-300">Contact</Link>
              </motion.li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
