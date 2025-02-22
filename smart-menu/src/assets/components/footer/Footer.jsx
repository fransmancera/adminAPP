import React from 'react'
import './footer.css'

const Footer = ({entrepriseName, enterpriseLogo}) => {
  return (
    <div className='footer-container'>
        <footer className="footer-bg p-4 flex items-center justify-center space-x-3">
            <p className='text-white font-semibold'>PoweredByKobalt &copy; {new Date().getFullYear()} & {entrepriseName}</p>
            <img className="h-9" src={`/images/${enterpriseLogo}`} alt="enterpriseLogo" />
        </footer>
    </div>
  )
}

export default Footer
