import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { x: "-100vw", opacity: 0 }, // Start position (off the screen to the left)
    visible: { x: 0, opacity: 1 }, };

  return (
    <nav className="bg-sky-950 p-4 shadow-xl zind">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          {" "}
          <img
            src="https://img.freepik.com/premium-vector/letter-r-logo-design-logo-template-creative-r-logo-vector-symbol_487414-3674.jpg?w=740"
            alt="Logo"
            className="w-11 h-auto rounded-full"
          />
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          {/* Mobile Menu */}
          <motion.div
            className={`zind md:hidden absolute top-16 left-0 w-full bg-blue-950 transition-transform transform ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } duration-300 ease-in-out`}
            initial="hidden"    // Initial state before animation starts
          animate="visible"    // Animate to the visible state
          exit="hidden"        // Optional: animate back to hidden when removed
          variants={variants}  // Define the slide-in animation behavior
          transition={{ duration: 0.5 }} 
          >
            <motion.ul className="flex flex-col space-y-4 p-4 zind" >
              <li>
                <motion.a href="/" className="text-white hover:font-bold" whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
                  Home
                </motion.a>
              </li>
              <li>
                <a href="#about" className="text-white hover:font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:font-bold">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white hover:font-bold">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:font-bold">
                  Contact
                </a>
              </li>
            </motion.ul>
          </motion.div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <motion.a href="/" className="text-white hover:font-bold" whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
              Home
            </motion.a>
            <motion.a href="#about" className="text-white hover:font-bold" whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
              About
            </motion.a>
            <motion.a href="#projects" className="text-white hover:font-bold" whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
              Projects
            </motion.a>
            <motion.a href="#skills" className="text-white hover:font-bold" whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
              Skills
            </motion.a>
            <motion.a href="#contact" className="text-white hover:font-bold" whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
