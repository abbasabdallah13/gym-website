import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import Hamburger from '../assets/icons/menu.png'

const Navbar = () => {
  const openOverlay = () =>{
    document.getElementById('mobile-overlay').style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  }

  const closeOverlay = () =>{
    document.getElementById('mobile-overlay').style.display = 'none';
    document.body.style.overflowY = 'scroll';
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.screen.width > '600'){
        document.getElementById('mobile-overlay').style.display='none';
      }
    })
  }, [])
  
  return (
    <div className='navbar'>
      <div className='mobile-overlay' id='mobile-overlay'>
        <span onClick={closeOverlay}>X</span>
        <div className='overlay-links'>
        <Link to='/' onClick={closeOverlay} >Home</Link>
        <a href='/#exercises' onClick={closeOverlay}>Exercises</a>
        </div>
      </div>
      <img className='hamburger' id='hamburger' src={Hamburger} alt='hamburger menu' onClick={openOverlay}/>
      <Link to='/' style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', textDecoration: 'none', marginLeft: '2%'}}>
        <img src={Logo} alt='logo' className='logo' />
        <p style={{fontSize: '0.7rem',textDecoration: 'none', color: '#AD0600', marginTop: '5px'}} >BODY SCULPTING</p>
    </Link>
    <div className='routes'>
      <Link to='/' style={{textDecoration: 'none', color: '#AD0600', fontSize: '0.9rem', fontWeight:'500'}}>Home</Link>
      <a href='/#exercises' style={{textDecoration: 'none', color: '#AD0600', fontSize: '0.9rem', fontWeight:'500', marginLeft: '35%'}}>
      Exercises</a>
    </div>
  </div>
  )
}

export default Navbar