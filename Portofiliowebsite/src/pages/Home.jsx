import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Footer from '../components/Footer'
import Experiences from '../sections/Expresiences'  

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about-section" className="bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
           
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">What I Do</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Full-Stack Web Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>React.js & Node.js Applications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Database Design & Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    <span>UI/UX Development</span>
                  </li>
                </ul>
              </div>
              
           
            </div>
            
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
                <p className="text-gray-300 leading-relaxed">
                  With several years of experience in web development, I've worked on various projects 
                  ranging from small business websites to complex web applications. I'm always eager 
                  to learn new technologies and improve my skills.
                </p>
              </div>
              
             
            </div>
          </div>
        </div>
      </section>
       <Experiences />
      <Skills />
     
      <Footer />

    </div>
  )
}

export default Home
