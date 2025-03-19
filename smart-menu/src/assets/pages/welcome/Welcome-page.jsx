import React from 'react';
import LogoComponent from '../../components/logo/Logo.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Heading from '../../components/heading/Heading.jsx';
import Paragraph from '../../components/paragraph/Paragraph.jsx';
import Form from '../../components/form/Form-wp.jsx';


const WelcomePage = () => {

  return (
    <div className='bg-[#FAF9F6]'>
      <LogoComponent src='Logo_V1.svg' className='text-center'/>
      <div className='mb-91'>
        <Heading/>
        <Paragraph/>
        <Form/>
      </div>
      <Footer entrepriseName={'Leno'} enterpriseLogo='Leno.png'/>
    </div>
  )
}

export default WelcomePage;
