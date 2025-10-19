import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/src/assets/profile/logo.png" 
                alt="Logo" 
                className="h-8 w-auto"
              />
            
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/APAryal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/apsara-aryal-8446b52a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:aryal.apsara23@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Projects
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services/Skills */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Services</h3>
            <ul className="flex flex-col space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>React Applications</li>
              <li>Full Stack Solutions</li>
              <li>UI/UX Design</li>
              <li>Database Design</li>
              <li>API Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-2">
              <a 
                href="mailto:aryal.apsara23@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="mr-2">📧</span>
                aryal.apsara23@gmail.com
              </a>
              <a 
                href="mailto:apsara.201743@ncit.edu.np"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="mr-2">🎓</span>
                apsara.201743@ncit.edu.np
              </a>
              <a 
                href="tel:+9779811229530"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="mr-2">📱</span>
                +977 9811229530
              </a>
              <p className="text-gray-400 flex items-center">
                <span className="mr-2">📍</span>
                Lalitpur, Balkumari
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/APAryal"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors hover:scale-110 transform duration-300"
                title="GitHub"
              >
                🐱
              </a>
              <a 
                href="https://www.linkedin.com/in/apsara-aryal-8446b52a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors hover:scale-110 transform duration-300"
                title="LinkedIn"
              >
                💼
              </a>
              <a 
                href="mailto:aryal.apsara23@gmail.com"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors hover:scale-110 transform duration-300"
                title="Email"
              >
                📧
              </a>
              <a 
                href="tel:+9779811229530"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors hover:scale-110 transform duration-300"
                title="Phone"
              >
                📱
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Apsara Aryal. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <FaHeart className="h-4 w-4 text-red-500" />
              <span>using React & TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
