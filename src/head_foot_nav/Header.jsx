import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import './Header.css'

export default function Header({ onMenuOpen }) {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer) // cleanup on unmount
  }, [])

  return (
    <header className="top-header">
      {/* Top Green Bar */}
      <div className="top-bar">
        <div className="left-icons">
          {/* Menu Trigger */}
          <div 
            className="menu-section"
            onClick={onMenuOpen}
            style={{ cursor: "pointer" }}
          >
            <FaBars className="menu-icon" />
            <span className="menu-text">Menu</span>
          </div>

          <span className="toll-text">📞 Toll Free - 1950</span>
        </div>

        <div className="right-links">
          <a href="#">Screen Reader Access</a>
          <a href="#">Skip to Main Content</a>
          <button className="font-button">A+</button>
          <button className="font-button">A-</button>
          <button className="lang-button">हिंदी में देखें</button>
        </div>
      </div>

      {/* Logo + Date Time Section */}
      <div className="logo-section">
        <div className="logo-text">
          <img 
            src="https://www.shutterstock.com/image-vector/vote-logo-check-mark-vector-260nw-2129303504.jpg" 
            alt="India Flag" 
            className="flag" 
          />
          <div>
            <div className="hindi-text">भारत निर्वाचन आयोग</div>
            <div className="eng-text">Election Commission of India</div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="top-buttons">
          <div className="date-time">
            {dateTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}  
            {' | '}
            {dateTime.toLocaleTimeString('en-IN')}
          </div>
        </div>
      </div>
    </header>
  )
}
