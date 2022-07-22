import { Typography, Stack } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart}) => {
  return (
    <Stack className = 'bodyPart-card'
     type="button" alignItems='center' justifyContent='center'  
     sx={{borderTop: bodyPart === item ? '4px solid #ff2625': '', backgroundColor: '#fff', borderBottomLeftRadius: '20px',
    width: '270px', height:'180px', cursor: 'pointer', gap: '47px'}}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({top: 1200, behavior:'smooth'});}}>
      <img className = 'bodyPart-card' src={Icon} style={{width:'40px', height: '40px'}} />
      <Typography sx={{textTransform: 'capitalize', fontWeight: '500', fontSize: '18px', fontFamily: ''}}>{item}</Typography>
    </Stack>
  )
}

export default BodyPart