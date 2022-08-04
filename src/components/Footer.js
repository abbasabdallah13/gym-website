import React from 'react';
import logo from '../assets/images/Logo.png';
import socialMedia from '../assets/icons/social-media.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginLeft: '1rem'}}>
        <img style={{width: '2rem', height: '2rem'}} src={logo} alt='logo' />
        <p>BODY SCULPTING</p>
      </div>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-around',alignItems: 'center', marginRight: '1rem'}}>
        <img src={socialMedia} alt='social media icons' width={'70%'} />
        <p>2022 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer