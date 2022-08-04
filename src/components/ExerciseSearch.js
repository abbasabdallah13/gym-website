import React, {useEffect, useState} from 'react'
import {Box, Stack, Typography, Button, TextField} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { handleSearch } from '../utils/handleSearch';
import HorizontalScrollBar from './HorizontalScrollBar';
import {bodyPartsArr,num} from '../utils/exercisesData';


  const ExerciseSearch = ({searchedExercises, setSearchedExercises, showHeaderTitle, bodyPart, setBodyPart,setShowHeaderTitle, search, setSearch, isLoading, setIsLoading}) => {
  const [bodyParts, setBodyParts] = useState([]);
  
  useEffect(() => {
    // const fetchExercisesByBodyParts = async () => {
    //   // const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
    //   // setBodyParts(['all',...bodyPartsData]);
    // }

    setBodyParts(['all',...bodyPartsArr])
    console.log(bodyParts);

    document.querySelector('#searchField').addEventListener('keypress', (e)=>{
      if(e.key === 'Enter'){
        document.querySelector('#searchButton').click();
      }
    })
  }, []);
  
  
  const obj ={
    data:bodyParts,
    bodyPart:bodyPart,
    setBodyPart:setBodyPart,
    bool:true,
    cardWidth:13,
    gap: 0,
    setShowHeaderTitle: {setShowHeaderTitle},
    showHeaderTitle:{showHeaderTitle}
  }
  return (
    <div>
      
   <Stack alignItems={'center'} justifyContent={'center'}>
     
    <p style={{fontWeight: '700', fontSize: '1.3rem', marginTop: '1rem'}} >
      Awesome Exercises You Should Try
    </p>
    <div className='searchfield-container' >
    <input type={'text'} id='searchField' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search for exercises'/>
    <Button id='searchButton' variant={'contained'} color={'error'} sx={{height:'3rem'}} onClick={ () => { handleSearch(searchedExercises, search, fetchData, exerciseOptions, setSearch, setSearchedExercises, setShowHeaderTitle, setBodyPart,setIsLoading,bodyPart,isLoading);
      }} >
        Search
    </Button>
    </div>
    <Box>
      <HorizontalScrollBar {...obj} />
    </Box>
   </Stack> 
   </div>
  )
}

export default ExerciseSearch