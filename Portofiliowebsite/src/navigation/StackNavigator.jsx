import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact' 
import Blog from '../pages/Blog'
import AdminLogin from '../pages/AdminLogin'



function StackNavigator() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminLogin />} />


        </Routes>
      </Router>
    </div>
  )
}

export default StackNavigator
