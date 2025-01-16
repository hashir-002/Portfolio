// https://img.freepik.com/premium-vector/letter-r-logo-design-logo-template-creative-r-logo-vector-symbol_487414-3674.jpg?w=740
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";
// import logo from "../assets/Visacandy logo TM.png";
import { FaInstagramSquare, FaFacebook, FaWhatsappSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

// Helper function to slugify strings
const slugify = (str) => 
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, '');    // Remove trailing hyphens

 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newDropdownOpen, setnewDropdownOpen] = useState(false);

  const variants = {
    hidden: { x: "-1vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
    
    <nav className="text-black bg-gradient-to-r from-red-100 via-white to-violet-100 lg:fixed relative w-full z-[999] shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 ">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="https://img.freepik.com/premium-vector/letter-r-logo-design-logo-template-creative-r-logo-vector-symbol_487414-3674.jpg?w=740" alt="logo" className="h-8 w-auto rounded-full sm:h-14 lg:h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-violet-600 px-3 py-2 text-sm font-medium">Home</a>
          <a href="#about" className="hover:text-violet-600 px-3 py-2 text-sm font-medium">About</a>
          <a href="#skills" className="hover:text-violet-600 px-3 py-2 text-sm font-medium">Skills</a>
          <a href="#projects" className="hover:text-violet-600 px-3 py-2 text-sm font-medium">Projects</a>
          <a href="/blogs" className="hover:text-violet-600 px-3 py-2 text-sm font-medium">Blogs</a>
          <a href="#contact" className="hover:text-violet-600 px-3 py-2 text-sm font-medium">Contact</a>

          {/* Apply Now Button */}
         
        </div>

        <Link to="/contact/" className='hidden lg:block'>
            <button className="bg-purple-700 text-white px-4 py-2 md:text-xs md:text-center md:px-6 md:py-2 rounded-full text-sm font-medium hover:bg-white hover:border-black hover:border-2 hover:text-violet-950">
              Hire me
            </button>
          </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center z-[9999]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 10-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l5.192 5.192a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
                  fill="currentColor"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
                  fill="currentColor"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      
        <div className={`${isOpen ? "top-4" : "-top-[1000%]"
        } fixed bottom-0 top-0 z-[999] flex h-[400px] mt-12 w-full flex-col justify-between bg-slate-50 dark:bg-gray-900  px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden shadow-md`}>
          <button className='w-full hover:bg-violet-100' onClick={() => setIsOpen(!isOpen)}>
            <a href="/" className="block py-1">Home</a>
          </button>
          <button className='w-full hover:bg-violet-100' onClick={() => setIsOpen(!isOpen)}>
            <a href="#about" className="block py-1">About</a>
          </button>
          <button className='w-full hover:bg-violet-100' onClick={() => setIsOpen(!isOpen)}>
            <a href="#skills" className="block py-1">Skills</a>
          </button>
          <button className='w-full hover:bg-violet-100' onClick={() => setIsOpen(!isOpen)}>
            <a href="#projects" className="block py-1">Projects</a>
          </button>
          <button className='w-full hover:bg-violet-100' onClick={() => setIsOpen(!isOpen)}>
            <Link to="/blogs" className="block py-1">Blogs</Link>
          </button>
          <button className='w-full hover:bg-violet-100' onClick={() => setIsOpen(!isOpen)}>
            <a href="#contact" className="block py-1">Contact</a>
          </button>
          
          
          
        </div>
    
    </nav>
    <div className='lg:pt-16 pt-1  bg-gradient-to-r from-purple-800 via-cyan-900 to-violet-950'>
      <div className='justify-center items-center flex text-amber-200 space-x-3'>
      
      <p className='text-xs lg:text-sm'> Reach out to me at </p>
      
        
       <p className='text-xs lg:text-sm flex'>  <IoCallSharp />
      +91 6281 311 129 
      </p>

      </div>

    </div>
    </>
  );
};

export default Navbar