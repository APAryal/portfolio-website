import React from 'react'
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'

function Contact() {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Primary Email',
      value: 'aryal.apsara23@gmail.com',
      description: 'Send me an email anytime',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🎓',
      title: 'Academic Email',
      value: 'apsara.201743@ncit.edu.np',
      description: 'Academic inquiries welcome',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+977 9811229530',
      description: 'Call me during business hours',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Lalitpur, Balkumari',
      description: 'Available for remote work',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: '🐱', url: 'https://github.com/APAryal', color: 'bg-gray-800 hover:bg-gray-900' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/apsara-aryal-8446b52a7/', color: 'bg-blue-700 hover:bg-blue-800' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'bg-pink-500 hover:bg-pink-600' }
  ]

  return (
    <>
  
 <div>
  <Navbar />
  {/* Contact Information Section */}
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-extrabold text-center mb-12">
      Contact Information
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contactInfo.map((info) => (
        <div
          key={info.title}
          className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${info.color}`}
        >
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">{info.icon}</span>
            <h3 className="text-xl font-semibold">{info.title}</h3>
          </div>
          <p className="text-gray-200 mb-2">{info.description}</p>
          <p className="text-white font-bold">{info.value}</p>
        </div>
      ))}
    </div>

    {/* Quick Contact Options */}
    <div className="flex flex-wrap justify-center gap-6 mt-12">
              <a 
                href="mailto:aryal.apsara23@gmail.com"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <span className="text-xl">📧</span>
                <span>Email Me</span>
              </a>
              <a 
                href="tel:+9779811229530"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <span className="text-xl">📱</span>
                <span>Call Me</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/apsara-aryal-8446b52a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <span className="text-xl">💬</span>
                <span>Let's Chat</span>
              </a>
            </div>
  </div>
  <Footer />
 </div>

    </>

  )
}

export default Contact
