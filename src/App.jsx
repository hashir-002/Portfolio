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
      <div className="bg-gradient-to-b from-sky-950 via-indigo-950 to-violet-950 min-h-screen">
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