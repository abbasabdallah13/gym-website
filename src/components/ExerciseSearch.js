import React, {useEffect, useState} from 'react'
import {Box, Stack, Typography, Button, TextField} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


 const ExerciseSearch = ({setSearchedExercises, bodyPart, setBodyPart,setShowHeaderTitle}) => {
  const [search, setSearch] = useState(''); 
  const [bodyParts, setBodyParts] = useState([]);
  console.log(search);
  
  useEffect(() => {
    const fetchExercisesByBodyParts = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
      console.log(bodyPartsData);
    }
    
    fetchExercisesByBodyParts();
  }, []);
  

  const handleSearch = async () =>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const outputExercises = exercisesData.filter((exercise) => {
        if(exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search)){
          return exercise;
        }
      })
      setSearch('');
      setSearchedExercises(outputExercises);
      setShowHeaderTitle('Showing Results:');
    }
  } 
  return (
   <Stack alignItems={'center'} justifyContent={'center'}>
    <Typography fontWeight={'700'} sx={{fontSize:{lg: '40px', xs:'20px'}}}>
      Awesome Exercises You Should Know
    </Typography>
    <Stack direction={'row'} mt={'60px'}>
    <TextField value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search for exercises' sx={{fontSize:'18px', width:'600px'}}/>
    <Button variant={'contained'} color={'error'} sx={{height:'55px'}} onClick={handleSearch}>Search</Button>
    </Stack>
    <Box>
      <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
   </Stack> 
  )
}

export default ExerciseSearch