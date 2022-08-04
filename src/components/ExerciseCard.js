import React from 'react';
import {Stack, Divider} from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseCard = ({el, index,key, extraStyles}) => {
  return (    
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Link style={extraStyles} className='exercise-card' key={index} to={`/exercise/${el.id}`} onClick={() => {window.scrollTo({top:document.querySelector('#exercises').getBoundingClientRect().y,left:0,behavior: 'smooth'})}} >
        <img src={el.gifUrl} alt={el.name} loading='lazy'/>
        <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{marginBottom: '20px', justifyContent:'center'}}>
        <button 
        style={{background: '#B7AFAF'}}>{el.bodyPart}</button>
        <button 
        style={{background: '#EA8282'}}>{el.target}</button>
       </Stack>
       <p style={{fontSize: '1rem', textTransform: 'capitalize', textAlign: 'center'}}> {el.name} </p>
        </Link>
        </div>
  )
}

export default ExerciseCard