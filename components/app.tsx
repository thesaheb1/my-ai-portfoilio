'use client'

import { useState } from 'react'
import ComponentsHeader from './components-header'
import Home from './components-home'
import Skills from './components-skills'
import Projects from './components-projects'
import Experience from './components-experience'
import AcademicJourney from './components-academic-journey'
import About from './components-about'
import FreelanceServices from './components-freelance-services'
import Contact from './components-contact'
import Footer from './components-footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <ComponentsHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <AcademicJourney />
        <About />
        <FreelanceServices />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}