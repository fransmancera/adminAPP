import React from 'react';
import './welcome-page.css';
import LogoComponent from '../logo/Logo.jsx';
import Footer from '../footer/Footer-wp.jsx';
import Heading from '../heading/Heading.jsx';
import Paragraph from '../paragraph/Paragraph.jsx';
import Form from '../form/Form-wp.jsx';


const WelcomePage = () => {

  return (
    <div>
      <LogoComponent src='Logo_V1.svg' className='text-center'/>
      <div className=''>
        <Heading/>
        <Paragraph/>
        <Form/>
      </div>
      <Footer/>
    </div>
  )
}

export default WelcomePage;
