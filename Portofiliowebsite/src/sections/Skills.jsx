import React from 'react'
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaServer } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiFirebase } from 'react-icons/si'

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", icon: FaReact, level: 90, color: "text-blue-400" },
        { name: "JavaScript", icon: FaJs, level: 95, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, level: 85, color: "text-blue-500" },
        { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "text-teal-400" },
       
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 88, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, level: 85, color: "text-gray-300" },
        { name: "MongoDB", icon: SiMongodb, level: 80, color: "text-green-600" },
       
        { name: "SQL", icon: FaDatabase, level: 82, color: "text-blue-400" },
        { name: "REST APIs", icon: FaServer, level: 90, color: "text-purple-400" },
      ]
    },
    {
      title: "Tools & Others",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 90, color: "text-orange-600" },
        { name: "VS Code", icon: FaServer, level: 95, color: "text-blue-500" },
        { name: "Figma", icon: FaServer, level: 70, color: "text-purple-500" },
        { name: "Postman", icon: FaServer, level: 85, color: "text-orange-500" },
      ]
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 mb-4`}>
                  <div className={`w-6 h-6 bg-gradient-to-r ${category.color} rounded`}></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm constantly exploring new technologies and improving my skills. Currently learning about 
              cloud computing, DevOps, and advanced React patterns to stay up-to-date with industry trends.
            </p>
            
            {/* Learning Technologies */}
            <div className="flex flex-wrap justify-center gap-4">
              {['Docker', 'AWS', 'GraphQL', 'React Native', 'Python'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
