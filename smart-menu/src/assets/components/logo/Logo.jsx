import React from 'react';
import './logo.css';

const LogoComponent = ({src}) => {
  return (
    <header className='p-4 place-items-center logo-container'>
      <img src={`/images/${src}`} alt="Logo" className='p-10 w-full rounded-xl max-w-[375px]'/>
    </header>
  )
}

export default LogoComponent;
