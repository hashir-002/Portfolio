import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div
            className={`zind md:hidden absolute top-16 left-0 w-full bg-blue-950 transition-transform transform ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } duration-300 ease-in-out`}
          >
            <ul className="flex flex-col space-y-4 p-4 zind">
              <li>
                <a href="/" className="text-white hover:font-bold">
                  Home
                </a>
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
            </ul>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:font-bold">
              Home
            </a>
            <a href="#about" className="text-white hover:font-bold">
              About
            </a>
            <a href="#projects" className="text-white hover:font-bold">
              Projects
            </a>
            <a href="#skills" className="text-white hover:font-bold">
              Skills
            </a>
            <a href="#contact" className="text-white hover:font-bold">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
