import React from "react";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Form from "./Form";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-28 p-8 bg-gradient-to-r from-[#38a2d7] to-slate-900 border-t-2 border-white"
      id="contact"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        Contact Details
      </h2>

      {/* Icon */}
      <div className="justify-center w-full flex flex-col items-center">

        <Form/>
        <div className="flex p-2 items-center justify-between space-x-2">
          <a
            className="flex mx-2"
            href="https://www.instagram.com/beingraqueeb?igsh=MWd0NWs4cjUxNmlvcA=="
          >
            <FaInstagram className="text-2xl text-white mb-4 mx-2" />{" "}
          
          </a>
          <a
            className="flex mx-2"
            href="https://www.linkedin.com/in/mohammad-abdul-raqueeb-992659323/"
          >
            <FaLinkedin className="text-2xl text-white mb-4 mx-2" />{" "}
          
          </a>
          <a
            className="flex mx-2"
            href="https://github.com/hashir-002/"
          >
            <FaGithub className="text-2xl text-white mb-4 mx-2" />{" "}
          
          </a>
        </div>

        <div className="flex items-center justify-center">
          <CgMail className="text-4xl text-blue-300 mx-1" />
          <p className="text-white">Mail me on raqueebabdul8@gmail.com</p>
        </div>

        {/* Button */}
      </div>
     
    </div>
  );
};

export default Contact;
