import React from 'react'
import Preview from '../components/Preview'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Blogs from './Blogs'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-violet-100 via-slate-100 to-indigo-100 min-h-screen mx-0 overflow-hidden text-black">
        
        <Preview />
        <Hero />
        <Skills />
        <Projects />

        
        <div className='mt-3 mx-4 flex flex-col justify-center items-center'>
          <h1>Blogs</h1>
          <Blogs/>
          </div>
        <Contact />
      </div>
  )
}

export default Home