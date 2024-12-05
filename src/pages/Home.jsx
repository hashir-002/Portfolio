import React from 'react'
import Preview from '../components/Preview'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-violet-950 via-cyan-900 to-indigo-950 min-h-screen mx-0 overflow-hidden">
        
        <Preview />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
  )
}

export default Home