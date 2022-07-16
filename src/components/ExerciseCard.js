import React from 'react';
import {Grid,Typography,Stack, Divider} from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseCard = ({el, index}) => {
  return (    
        <Link className='exerciseCardByAbbas' key={index} to={`/exercise/${el.id}`} onClick={() => {window.scrollTo({top:0,left:0,behavior: 'smooth'})}} >
        <img src={el.gifUrl} alt={el.name} loading='lazy'/>
        <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{marginBottom: '20px', justifyContent:'center'}}>
        <button 
        style={{ml: '21px', color: '#382525', background: '#B7AFAF', fontSize: '16px', border: 'none', textTransform: 'capitalize', padding:'10px', fontWeight: '700'}}>{el.bodyPart}</button>
        <button 
        style={{ml: '21px', color: '#382525', background: '#EA8282', fontSize: '16px', border: 'none', textTransform: 'capitalize', padding:'10px', fontWeight: '700'}}>{el.target}</button>
       </Stack>
       <Typography sx={{fontSize: '22px', fontWeight: 'light', textTransform: 'capitalize', textAlign: 'center'}}> {el.name} </Typography>

        </Link>
  )
}

export default ExerciseCard