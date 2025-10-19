import React from 'react'

function Experiences() {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "SERA Digital Hub",
      period: "June 2025 – September 2025",
      location: "Kathmandu, Nepal",
      website: "https://sera.com.np",
      type: "Internship",
      description: "Gained hands-on experience in front-end and back-end development, API integration, and web deployment.",
      highlights: [
        "Worked with React, Node.js, MongoDB, MySQL",
        "Enhanced UI/UX design and responsiveness",
        "Collaborated with senior developers on testing"
      ],
      technologies: ["React", "Node.js", "MongoDB", "MySQL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💼"
    },
    {
      id: 2,
      title: "TechLeaders Fellowship",
      company: "Aviyanta Foundation",
      period: "November 2024 – April 2025",
      location: "Kathmandu, Nepal",
      type: "Fellowship",
      description: "Built full-stack mobile application using React Native to solve public transportation challenges in Kathmandu.",
      highlights: [
        "Collected bus route data with Traffic Division",
        "Used PostgreSQL for data storage & processing",
        "Led community initiative on traffic education"
      ],
      technologies: ["React Native", "PostgreSQL", "Node.js", "React"],
      color: "from-purple-500 to-pink-500",
      icon: "🚀"
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My journey in web development through internships and fellowships, building real-world solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-50"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center`}>
                    <span className="text-sm">{exp.icon}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`bg-gradient-to-r ${exp.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {exp.type}
                        </span>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-semibold text-blue-400">{exp.company}</span>
                        {exp.website && (
                          <a 
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            🔗
                          </a>
                        )}
                      </div>
                      
                      <p className="text-gray-400 text-sm flex items-center">
                        <span className="mr-1">📍</span>
                        {exp.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start space-x-2">
                            <span className="text-green-400 mt-1 text-sm">✓</span>
                            <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600/50 hover:border-blue-400/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-20 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                9+ Months
              </div>
              <p className="text-gray-400">Professional Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                8+ Projects
              </div>
              <p className="text-gray-400">Completed Successfully</p>
            </div>
            
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Resume →
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Experiences
