'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const navItems = [
  'Home',
  'Skills',
  'Projects',
  'Experience',
  'Academic Journey',
  'About',
  'Freelance Services',
  'Contact',
]

interface ComponentsHeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function ComponentsHeader({ activeSection, setActiveSection }: ComponentsHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          SAHEB
        </a>
        <nav className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === item.toLowerCase().replace(' ', '-')
                ? 'text-blue-600 dark:text-blue-400'
                : ''
                }`}
              onClick={() => setActiveSection(item.toLowerCase().replace(' ', '-'))}
            >
              {item}
            </a>
          ))}
        </nav>
        <a href="/resume/saheb.pdf"
          download="saheb.pdf" className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Download Resume
        </a>
        <button
          className="lg:hidden text-gray-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === item.toLowerCase().replace(' ', '-')
                  ? 'text-blue-600 dark:text-blue-400'
                  : ''
                  }`}
                onClick={() => {
                  setActiveSection(item.toLowerCase().replace(' ', '-'))
                  setIsMenuOpen(false)
                }}
              >
                {item}
              </a>
            ))}
            <a href="/resume/saheb.pdf"
              download="saheb.pdf" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}