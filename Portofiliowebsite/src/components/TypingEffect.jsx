import React, { useState, useEffect } from 'react'

function TypingEffect({ 
  text = [], 
  speed = 100, 
  eraseSpeed = 50, 
  typingDelay = 500, 
  eraseDelay = 2000,
  cursor = '|',
  className = '',
  loop = true 
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (text.length === 0) return

    let timeout

    if (isTyping) {
      // Typing phase
      const fullText = text[currentTextIndex]
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1))
        }, speed)
      } else {
        // Finished typing, wait before erasing
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, eraseDelay)
      }
    } else {
      // Erasing phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, eraseSpeed)
      } else {
        // Finished erasing, move to next text
        timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => {
            if (loop) {
              return (prev + 1) % text.length
            } else {
              return prev + 1 < text.length ? prev + 1 : prev
            }
          })
          setIsTyping(true)
        }, typingDelay)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isTyping, text, speed, eraseSpeed, typingDelay, eraseDelay, loop])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        {cursor}
      </span>
    </span>
  )
}

export default TypingEffect