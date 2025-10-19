import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import port1 from '../assets/projects/PortofiloImage/1.png'
import saw1 from '../assets/projects/SawariSathiProjectImage/1.png'
import saw2 from '../assets/projects/SawariSathiProjectImage/2.png'
import saw3 from '../assets/projects/SawariSathiProjectImage/3.png'
import saw4 from '../assets/projects/SawariSathiProjectImage/4.png'
import saw5 from '../assets/projects/SawariSathiProjectImage/5.png'
import saw6 from '../assets/projects/SawariSathiProjectImage/6.png'
import seraDigitalImg from '../assets/profile/SeraDigitalmarketing/1.png'
import dentalCareImg from '../assets/projects/Dental_care/1.png'
import seraEdu1 from '../assets/projects/SERAeducationhb/1.png'
import serEng1 from '../assets/projects/SeraEnglishExpress/1.png'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  // New: track which project cards are expanded
  const [expandedIds, setExpandedIds] = useState([])

  const TRUNCATE_LEN = 140
  const toggleExpand = (id) => {
    setExpandedIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))
  }

  // Projects data (removed E-Commerce Website, Task Management App, Weather Dashboard)
  const projects = [
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design.",
      image: port1, // changed to use local image: src/assets/projects/PortofiloImage/1.png
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 7,
      title: "Sawari Sathi — KTM Bus Routes Navigator",
      description: "Sawari Sathi is a smart public bus navigation app built for Kathmandu Valley. I worked as a frontend developer building user-friendly pages, integrating tab and dropdown navigation, designing responsive UI/UX, and linking with APIs to fetch dynamic route and fare data.",
      images: [ saw1, saw2, saw3, saw4, saw5, saw6 ], // new images array
      image: saw1, // fallback / thumbnail
      technologies: ["React Native", "Node.js", "Supabase", "APIs", "Responsive UI"],
      category: "fullstack",
      github: "https://github.com/APAryal/sabaristhi.git",
      live: "#",
      featured: true
    },
    {
      id: 8,
      title: "Dental Care",
      description: "Responsive dental care website built with HTML, CSS, JavaScript and PHP. Includes appointment/contact form handling via PHP and is optimized for desktop, tablet and mobile.",
      image: dentalCareImg, // uses local image: src/assets/projects/Dental_care/1.png
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "frontend",
      github: "https://github.com/APAryal/dental_care.git",
      live: "#",
      featured: false
    },
    {
      id: 1,
      title: "SERA Digital Marketing",
      description: "Part of SERA Digital Hub internship — worked on front-end pages, UI/UX improvements, responsiveness and content integration for the SERA Digital Marketing site. Implemented components, improved accessibility and performance.",
      image: seraDigitalImg, // uses local image: src/assets/profile/SeraDigitalmarketing/1.png
      technologies: ["React", "Tailwind CSS",],
      category: "web",
      github: "#",
      live: "https://sera.com.np",
      featured: true
    },
    {
      id: 2,
      title: "SERA English Express",
      description: "Contributed to the SERA English Express site focusing on responsive layouts, interactive components, and content workflows.",
      image: serEng1,
      technologies: ["React", "Tailwind CSS", "Node.js","MySQL"],
      category: "web",
      github: "#",
      live: "https://sera.com.np",
      featured: true
    },
    {
      id: 3,
      title: "SERA Education Hub",
      description: "Built and refined UI components for the SERA Education Hub during the internship: focused on course listing pages, responsive layouts, and accessibility improvements; collaborated with seniors on testing and documentation.",
      image: seraEdu1, // uses local image: src/assets/projects/SERAeducationhb/1.png
      technologies: ["TypeScript", "Tailwind CSS", ],
      category: "web",
      github: "#",
      live: "https://sera.com.np",
      featured: true
    }
  ] 

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'featured', name: 'Featured', icon: '⭐' },
    { id: 'fullstack', name: 'Full Stack', icon: '💻' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' }
  ]

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return project.featured
    return project.category === activeFilter
  })

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of web applications, from e-commerce platforms to interactive dashboards.
              Each project represents a unique challenge and creative solution.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-300">
                <span className="text-2xl">💡</span>
                <span>Creative Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <span className="text-2xl">🛠️</span>
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center space-x-2 text-green-300">
                <span className="text-2xl">📱</span>
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Projects Count */}
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-blue-600">{filteredProjects.length}</span> projects
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const isExpanded = expandedIds.includes(project.id)
                const needsToggle = project.description && project.description.length > TRUNCATE_LEN
                const shownDescription = needsToggle && !isExpanded
                  ? project.description.slice(0, TRUNCATE_LEN).trim() + '...'
                  : project.description

                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden h-full flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      {project.images && project.images.length > 0 ? (
                        <div className="relative h-48 flex items-center justify-center">
                          {/* main image fills card */}
                          <img
                            src={project.images[0]}
                            alt={`${project.title} main`}
                            className="w-full h-48 object-cover rounded-t-2xl"
                          />
                          {/* left / right rotated thumbnails (desktop only) */}
                          <img
                            src={project.images[1]}
                            alt={`${project.title} thumb 1`}
                            className="hidden md:block absolute left-3 top-6 w-20 h-28 object-cover rounded-lg transform -rotate-6 shadow-lg"
                          />
                          <img
                            src={project.images[2]}
                            alt={`${project.title} thumb 2`}
                            className="hidden md:block absolute right-3 top-6 w-20 h-28 object-cover rounded-lg transform rotate-6 shadow-lg"
                          />
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}

                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <span>⭐</span>
                          <span>Featured</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Content: make it flex-col so buttons stay at bottom */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description with optional Show more */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {shownDescription}
                        {needsToggle && (
                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="ml-2 text-sm text-blue-600 hover:underline"
                          >
                            {isExpanded ? 'Show less' : 'Show more'}
                          </button>
                        )}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons pinned to bottom */}
                      <div className="mt-auto flex space-x-3">
                        <a
                          href={project.github}
                          className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 text-center font-medium flex items-center justify-center space-x-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>📂</span>
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center font-medium flex items-center justify-center space-x-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>🌐</span>
                          <span>Live</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* No Projects Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
                <p className="text-gray-600">Try selecting a different category to see more projects.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2">
                <span>📧</span>
                <span>Contact Me</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
                <span>📄</span>
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}



export default Projects
