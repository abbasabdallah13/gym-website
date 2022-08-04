import React from 'react'
import {Box, Typography, Button, TextField} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import { handleSearch } from '../utils/handleSearch';

const HeroBanner = ({search, setSearch}) => {
  return (
    <div className='hero-banner'>
     
        <div className='herobanner-intro'>
        <p style={{color:'#E05816', fontSize:'1.3rem', textTransform:'uppercase', textAlign:'center'}}>
            Body Scultping 
        </p>
        <p style={{fontWeight: '700', fontSize: '2rem', lineHeight: '1.4'}}>
            Sweat, Smile, <br/> & Repeat
        </p>
        <p style={{lineHeight:'1rem', color: '#004f04', fontWeight: '500', marginBottom:'0.5rem', marginTop: '0.5rem'}}>
            Check out the most effective exercises!
        </p>
        <Button variant='contained' color='error' onClick={() => {
          console.log('test');
          window.scrollTo({top:document.querySelector('#exercises').getBoundingClientRect().y+document.documentElement.scrollTop, behavior:'smooth'})} 
        } sx={{zIndex:1}}>Explore Exercises</Button>
        </div>
        <div className='heroBanner-img-container'>
        <img src={HeroBannerImage} alt='hero-banner'/>
        <p>EXERCISES</p>
        </div>
    </div>
  )
}

export default HeroBanner