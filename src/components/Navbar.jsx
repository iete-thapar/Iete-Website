import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// moved logo into public/assets. Use public URL
const logo = '/assets/iete_logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="shadow sticky top-0 z-50">
      <nav className="bg-black p-1" style={{ minHeight: 100 }}>
        <div className="grid gap-1 sm:grid-cols-12">
          {/* Left Side Navigation Links - Desktop */}
          <div className="h-20 sm:col-span-4 sm:col-start-2 hidden sm:flex justify-around items-center">
            <Link
              to="/event"
              className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Events
            </Link>
            <Link
              to="/department"
              className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Departments
            </Link>
          </div>

          {/* Logo and Mobile Menu Button */}
          <div className="bg-black sm:col-span-2 flex justify-center items-center relative">
            <Link to="/">
              <img
                src={logo}
                alt="IETE Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="sm:hidden absolute right-4 text-white text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col space-y-1">
                <span
                  className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Right Side Navigation Links - Desktop */}
          <div className="h-20 sm:col-span-4 hidden sm:flex justify-around items-center">
            <Link
              to="/team"
              className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Team
            </Link>
            <Link
              to="/gallery"
              className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl transition-colors duration-300 hover:text-purple-700"
            >
              Gallery
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/event"
              className="text-white text-xl transition-colors duration-300 hover:text-purple-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>

            <Link
              to="/department"
              className="text-white text-xl transition-colors duration-300 hover:text-purple-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Departments
            </Link>
            <Link
              to="/team"
              className="text-white text-xl transition-colors duration-300 hover:text-purple-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/gallery"
              className="text-white text-xl transition-colors duration-300 hover:text-purple-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
