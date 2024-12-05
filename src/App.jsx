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
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/Blogpost";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="mx-0 overflow-hidden">
        <Navbar/>
        </div>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        </Routes>
        

      </Router>
    </>
  );
}

export default App;
