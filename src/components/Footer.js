import React from 'react';
import logo from '../assets/images/Logo.png';
import socialMedia from '../assets/icons/social-media.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginLeft: '20px'}}>
        <img style={{width: '48px', height: '48px'}} src={logo} />
        <p>BODY SCULPTING</p>
      </div>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between', marginRight: '20px'}}>
        <img src={socialMedia} alt='social media icons' />
        <p>2022 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer