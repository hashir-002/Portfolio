import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const roles = [
  "Web Developer",
  "Computer Science Student",
  "App Developer",
  "Freelancer",
];

const TypingEffect = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let typingTimeout;
    const fullText = roles[currentRoleIndex];

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, typingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(50); // Speed up deletion
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6  space-x-5"
      id="about"
    >
      {/* Left side */}
      <div className="text-center lg:text-left mx-10 top-0 left-0">
        <h1 className="text-4xl text-gray-950 md:text-5xl font-bold mb-4">
          Hi, I am{" "}
          <span className="text-purple-800">Mohammad Abdul Raqueeb</span>, a
        </h1>
        <div className="mt-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-600">
            <TypingEffect />
          </h2>
        </div>
      </div>

      {/* Right side (Image) */}
      <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
        <img
          src="/raqueeb.jpeg"
          alt="Mohammad Abdul Raqueeb"
          className="rounded-full mx-auto lg:mx-0 w-96 h-auto border-4 border-red-950"
        />

        <div className="text-violet-950 p-3 text-3xl flex mt-2 ml-6">
          <a
            className="mx-2"
            href="https://www.instagram.com/beingraqueeb?igsh=MWd0NWs4cjUxNmlvcA=="
          >
            <FaInstagram />
          </a>

          <a className="mx-2" href="https://github.com/hashir-002/">
            <FaGithub />
          </a>
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/mohammad-abdul-raqueeb-992659323/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
