import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
        sx={{mt:{
            lg: '112px',
            xs: '70px'
        }, ml: {lg:'110px' ,sm: '50px'}}}>
        <Typography color={'#E05816'} fontSize={'30px'} fontWeight={'light'} textTransform={'uppercase'}>
            Body Scultping 
        </Typography>
        <Typography fontWeight ={'700'} sx={{fontSize:{
            lg:'44px',
            sm: '40px'
        }, mt: '20px', mb:'20px'}}>
            Sweat, Smile, <br/> & Repeat
        </Typography>
        <Typography lineHeight={'35px'} color='#004F04' fontWeight={'500'} mb={'10px'}>
            Check out the most effective exercises!
        </Typography>
        <Button variant='contained' color='error' href='#exercises' >Explore Exercises</Button>
        <img src={HeroBannerImage}className="hero-banner-img" alt='hero-banner'/>
        <Typography color={'#ff2625'} sx={{opacity: '0.1', fontSize: '200px', mt: '40px', zIndex: '0', display: {lg: 'block', xs: 'none'}}}>EXERCISES</Typography>
    </Box>
  )
}

export default HeroBanner