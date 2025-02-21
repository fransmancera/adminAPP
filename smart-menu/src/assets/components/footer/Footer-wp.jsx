import React from 'react'
import './footer-wp.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <footer className="footer-bg text-white p-4 text-center font-bold">
            <p>&copy; {new Date().getFullYear()} PowerBy Kobalt</p>
        </footer>
    </div>
  )
}

export default Footer
