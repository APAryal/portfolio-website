import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to manage state and side effects in functional components effectively.",
      content: "React Hooks revolutionized the way we write React components...",
      author: "Apsara Aryal",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "react",
      tags: ["React", "JavaScript", "Hooks"],
      image: "https://via.placeholder.com/400x250/3B82F6/ffffff?text=React+Hooks",
      featured: true
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better Layouts",
      excerpt: "Explore CSS Grid, Flexbox, and other modern CSS features that make creating layouts easier and more efficient.",
      content: "CSS has evolved significantly over the years...",
      author: "Apsara Aryal",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "css",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      image: "https://via.placeholder.com/400x250/10B981/ffffff?text=CSS+Grid",
      featured: false
    },
    {
      id: 3,
      title: "Building RESTful APIs with Node.js",
      excerpt: "A comprehensive guide to creating robust and scalable REST APIs using Node.js and Express.js.",
      content: "Building APIs is a crucial skill for full-stack developers...",
      author: "Apsara Aryal",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "nodejs",
      tags: ["Node.js", "Express", "API", "Backend"],
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=Node.js+API",
      featured: true
    },
    {
      id: 4,
      title: "JavaScript ES6+ Features You Should Know",
      excerpt: "Discover the most useful ES6+ features that will make your JavaScript code more modern and efficient.",
      content: "JavaScript has evolved tremendously with ES6 and beyond...",
      author: "Apsara Aryal",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "javascript",
      tags: ["JavaScript", "ES6", "Modern JS"],
      image: "https://via.placeholder.com/400x250/F59E0B/ffffff?text=ES6+Features",
      featured: false
    },
    {
      id: 5,
      title: "Responsive Web Design Best Practices",
      excerpt: "Learn the essential principles and techniques for creating websites that work perfectly on all devices.",
      content: "In today's mobile-first world, responsive design is crucial...",
      author: "Apsara Aryal",
      date: "2023-12-20",
      readTime: "8 min read",
      category: "design",
      tags: ["Responsive", "CSS", "Mobile-First"],
      image: "https://via.placeholder.com/400x250/8B5CF6/ffffff?text=Responsive+Design",
      featured: false
    },
    {
      id: 6,
      title: "Database Design Fundamentals",
      excerpt: "Understanding the principles of good database design and how to structure your data effectively.",
      content: "Database design is the foundation of any robust application...",
      author: "Apsara Aryal",
      date: "2023-12-15",
      readTime: "12 min read",
      category: "database",
      tags: ["Database", "SQL", "Design"],
      image: "https://via.placeholder.com/400x250/DC2626/ffffff?text=Database+Design",
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts', icon: '📚', count: blogPosts.length },
    { id: 'featured', name: 'Featured', icon: '⭐', count: blogPosts.filter(post => post.featured).length },
    { id: 'react', name: 'React', icon: '⚛️', count: blogPosts.filter(post => post.category === 'react').length },
    { id: 'javascript', name: 'JavaScript', icon: '🟨', count: blogPosts.filter(post => post.category === 'javascript').length },
    { id: 'css', name: 'CSS', icon: '🎨', count: blogPosts.filter(post => post.category === 'css').length },
    { id: 'nodejs', name: 'Node.js', icon: '🟢', count: blogPosts.filter(post => post.category === 'nodejs').length }
  ]

  // Filter and search logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || 
                           (activeCategory === 'featured' && post.featured) ||
                           post.category === activeCategory
    
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            As soon as possible, a blog will be added here.
          </p>
          
          {/* Search Bar */}
          {/* <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 text-xl">🔍</span>
          </div> */}
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Blog
