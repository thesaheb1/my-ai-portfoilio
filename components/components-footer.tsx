'use client'

export default function ComponentsFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 MERN Developer. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4 flex-wrap">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-blue-400">
              Experience
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}