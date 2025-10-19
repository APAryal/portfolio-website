import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  const [activeSection, setActiveSection] = useState(0)
  
  // Skills data with proper levels
  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 85, icon: '🟨', color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML/CSS', level: 95, icon: '🌐', color: 'from-green-400 to-blue-500' },
    { name: 'Tailwind CSS', level: 88, icon: '🎨', color: 'from-teal-400 to-cyan-500' },
    { name: 'Node.js', level: 75, icon: '🟢', color: 'from-green-500 to-green-600' },
    { name: 'Git/GitHub', level: 80, icon: '📁', color: 'from-purple-400 to-purple-600' }
  ]

  // Auto-rotate testimonials
  const testimonials = [
    { text: "Clean code and excellent problem-solving skills", author: "Project Reviewer" },
    { text: "Always delivers quality work on time", author: "Team Lead" },
    { text: "Great attention to detail and user experience", author: "UI/UX Designer" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div>
      <Navbar />
      
      {/* About Section - From Home Page */}
      <section id="about-section" className="bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
            </p>
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
              
              {/* Learn More Button */}
              <div className="text-center mt-8">
                <button 
                  onClick={() => document.getElementById('detailed-about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Learn More About Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <div id="detailed-about" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* My Story Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">My Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here's a deeper look into my journey, passion, and what drives me as a developer
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Personal Story */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Web Developer & Problem Solver</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                    I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. 
                    My journey in web development started with curiosity and has grown into a career where I get to solve 
                    problems and bring ideas to life through code.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    When I'm not coding, you can find me exploring new technologies, reading tech blogs, or working on 
                    personal projects that challenge me to learn and grow as a developer.
                  </p>

                  {/* Achievement badges */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="text-2xl mb-1">🎯</div>
                      <div className="text-sm font-medium text-gray-700">Problem Solver</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                      <div className="text-2xl mb-1">⚡</div>
                      <div className="text-sm font-medium text-gray-700">Fast Learner</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-2xl mb-1">🚀</div>
                      <div className="text-sm font-medium text-gray-700">Innovator</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                      <span>📄</span>
                      <span>Download Resume</span>
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
                      <span>💼</span>
                      <span>View Projects</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats & Testimonials */}
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="text-3xl font-bold">6+</div>
                    <div className="text-blue-100">Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-4xl mb-2">⏰</div>
                    <div className="text-3xl font-bold">1+</div>
                    <div className="text-purple-100">Years</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-4xl mb-2">👥</div>
                    <div className="text-3xl font-bold">4+</div>
                    <div className="text-green-100">Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="text-4xl mb-2">🏆</div>
                    <div className="text-3xl font-bold">2+</div>
                    <div className="text-orange-100">Awards</div>
                  </div>
                </div>

                {/* Testimonials Section */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4 text-center">What Others Say</h3>
                  <div className="text-center min-h-[120px] flex items-center justify-center">
                    <div className="transition-all duration-500">
                      <blockquote className="text-lg italic mb-3">
                        "{testimonials[activeSection].text}"
                      </blockquote>
                      <p className="text-blue-200">- {testimonials[activeSection].author}</p>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-2 mt-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeSection ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                        onClick={() => setActiveSection(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here are the technologies and tools I work with to bring ideas to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Learning'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          {/* <div id="experience" className="rounded-3xl shadow-2xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Journey & Experience</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                <div className="space-y-8">
                  <div className="relative pl-12">
                    <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2"></div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-800 text-lg">Web Developer</h4>
                      <p className="text-blue-600 font-medium">Self-taught & Continuous Learning</p>
                      <p className="text-gray-600 mt-2">Building projects and expanding skills in modern web technologies</p>
                    </div>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2"></div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-800 text-lg">Education</h4>
                      <p className="text-purple-600 font-medium">Computer Science / Related Field</p>
                      <p className="text-gray-600 mt-2">Strong foundation in programming and software development</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl text-white font-bold shadow-2xl mb-6">
                    👨‍💻
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Always Learning</h3>
                  <p className="text-gray-600">Passionate about staying updated with the latest technologies and best practices</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Contact Section */}
          <div id="contact" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      📧
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Primary Email</div>
                      <span className="text-gray-600">aryal.apsara23@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      📱
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Phone</div>
                      <span className="text-gray-600">+977 9811229530</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      📍
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Location</div>
                      <span className="text-gray-600">Lalitpur, Balkumari</span>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center mb-4">
                    <p className="text-gray-600">Follow me on social media</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/apsara-aryal-8446b52a7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                    >
                      💼
                    </a>
                    <a 
                      href="https://github.com/APAryal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                    >
                      🐱
                    </a>
                    <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                      🐦
                    </button>
                    <button className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                      📷
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <blockquote className="text-2xl md:text-3xl italic font-light max-w-4xl mx-auto mb-6">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <p className="text-blue-200 text-lg">- Cory House</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;
document.head.appendChild(style);
