import React from 'react'


const NewFooter = ({entrepriseName, enterpriseLogo}) => {
  return (
    <div className='footer-container'>
        <footer className="footer-bg text-white p-4 text-center font-bold">
            <p>PoweredByKobalt &copy; {new Date().getFullYear()} & {entrepriseName} {enterpriseLogo}</p>
        </footer>
    </div>
  )
}

export default NewFooter
