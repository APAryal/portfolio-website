import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowDown, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import TypingEffect from '../components/TypingEffect'
import Button from '../components/Button'

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden  ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 "></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mt-10">
              <HiSparkles className="w-4 h-4 mr-2" />
              <span>Hello, I'm a </span>
              <TypingEffect
                text={['Full Stack Developer', 'UI/UX Designer', 'App Developer']}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                className="ml-1"
              />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Apsara Aryal
                </span>
              </h1>
              
             
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Passionate full-stack developer specializing in React.js, Node.js, and modern web technologies. 
              I turn complex problems into simple, beautiful, and intuitive solutions.
            </p>

            {/* Action Buttons */}
           <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>

            <Button
            href='/assest/resume/Apsara_Aryal_Resume.pdf'
            download="Apsara_Aryal_Resume.pdf"
            variant="primary"
            size="lg"
            icon={<FaDownload />}
            className='shadow-lg hover:shadow-blue-500/25'

            >Download Resume</Button>
          

         
            <Button
            to="/contact"
            variant="outline"
            size="lg"

            >Let's Connect</Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full p-4">
                    <img
                      src="/src/assets/profile/Portfolio.png"
                      alt="Apsara Aryal"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <FaArrowDown className="w-4 h-4 animate-bounce group-hover:text-blue-400" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
    </section>
  )
}

export default Hero
