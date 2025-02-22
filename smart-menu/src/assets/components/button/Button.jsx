import React from 'react'
import './button.css'

const Button = ({btnType, btnTitle}) => {
  return (
    <div className='flex justify-center button-container'>
      <button type={btnType} className='text-white rounded-xl mt-4 mb-4'>{btnTitle}</button>
    </div>
  )
}

export default Button
