import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-violet-950 via-cyan-900 to-indigo-950 min-h-screen mx-0 overflow-hidden">
        <Navbar />
        <Preview />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
