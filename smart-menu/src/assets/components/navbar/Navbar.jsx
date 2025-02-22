import React from 'react'
import './navbar.css'
import Button from '../button/Button'

const Navbar = () => {
  return (
    <div className='navbar-container w-full p-1' style={{backgroundColor: 'rgb(20, 4, 29)'}}>
      <nav className='grid grid-cols-4 gap-4 text-center'>
        <Button btnType='button' btnTitle='Home'/>
        <Button btnType='button' btnTitle='Scock?'/>
        <Button btnType='button' btnTitle='Carrito'/>
        <Button btnType='button' btnTitle='Pedidos'/>
      </nav>
    </div>
  )
}

export default Navbar
