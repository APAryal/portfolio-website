import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiMenu, FiX } from "react-icons/fi"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <>
      <nav className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50' 
          : 'bg-transparent'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="ml-3 hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Apsara Aryal
                </span>
                <div className="text-xs text-gray-400">Full Stack Developer</div>
              </div>
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {[
              
                  { path: '/about', name: 'About' },
                  { path: '/projects', name: 'Projects' },
                  { path: '/blog', name: 'Blog' },
                  { path: '/contact', name: 'Contact' }
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative
                      ${isActiveLink(item.path)
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                      }
                    `}
                  >
                    {item.name}
                    {isActiveLink(item.path) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Social Media Icons & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://github.com/APAryal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/apsara-aryal-8446b52a7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <Link
                to="/contact"
                className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl transform transition-transform duration-300 ease-out z-50 md:hidden border-l border-slate-700/50
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/profile/logo.png" 
                alt="Profile" 
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <h3 className="text-white font-semibold">Apsara Aryal</h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2 mb-8">
            {[
              { path: '/', name: 'Home',  },
              { path: '/about', name: 'About', },
              { path: '/projects', name: 'Projects',  },
              { path: '/blog', name: 'Blog',  },
              { path: '/contact', name: 'Contact',  }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`
                  flex items-center px-4 py-3 rounded-xl transition-all duration-300
                  ${isActiveLink(item.path)
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                  }
                `}
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                {isActiveLink(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Social Media Links */}
          <div className="border-t border-slate-700/50 pt-6">
            <h4 className="text-gray-400 text-sm font-medium mb-4">Connect with me</h4>
            <div className="flex space-x-3">
              <a
                href="https://github.com/APAryal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-800/50 hover:bg-slate-700 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/apsara-aryal-8446b52a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-800/50 hover:bg-slate-700 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar