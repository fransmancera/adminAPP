import React from 'react'
import './bbar.css'
import Button from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCubesStacked, faCartShopping, faClipboard } from '@fortawesome/free-solid-svg-icons'

const Bbar = () => {
  return (
    <div className='navbar-container w-full p-3' style={{backgroundColor: 'rgb(20, 4, 29)'}}>
      <nav className='grid grid-cols-4 gap-4 items-center justify-center'>
        <button className='flex justify-center p-2' style={{borderRadius: '10%', backgroundColor: 'rgb(99, 78, 183)'}}><FontAwesomeIcon className='text-white p-2' icon={faHouse} /></button>
        <button className='flex justify-center p-2' style={{borderRadius: '10%', backgroundColor: 'rgb(99, 78, 183)'}}><FontAwesomeIcon className='text-white p-2' icon={faCubesStacked} /></button>
        <button className='flex justify-center p-2' style={{borderRadius: '10%', backgroundColor: 'rgb(99, 78, 183)'}}><FontAwesomeIcon className='text-white p-2' icon={faCartShopping} /></button>
        <button className='flex justify-center p-2' style={{borderRadius: '10%', backgroundColor: 'rgb(99, 78, 183)'}}><FontAwesomeIcon className='text-white p-2' icon={faClipboard} /></button>
      </nav>
    </div>
  )
}

export default Bbar
