import React from "react";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-28 bg-gray-100 p-8 bg-slate-900 border-t-2 border-white"
      id="contact"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        Contact Details
      </h2>

      {/* Icon */}
      <div className="justify-center">
        <a
          className="flex mx-2"
          href="https://www.instagram.com/beingraqueeb?igsh=MWd0NWs4cjUxNmlvcA=="
        >
          <FaInstagram className="text-4xl text-fuchsia-700 mb-4 mx-2" />{" "}
          <p className="text-white">Contact on Instagram from here</p>
        </a>

        <div className="flex ">
          <CgMail className="text-4xl text-red-300 mb-4 mx-2" />
          <p className="text-white">Mail me on raqueebabdul8@gmail.com</p>
        </div>

        {/* Button */}
      </div>
      <button className="bg-green-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-100 transition duration-300 ease-in-out mt-3">
        <a href="https://wa.me/6281311129">Hire Me</a>
      </button>
    </div>
  );
};

export default Contact;
