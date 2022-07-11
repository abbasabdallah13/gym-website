import React,{useState} from 'react'
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import ExerciseSearch from '../components/ExerciseSearch';


const Home = () => {
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [showHeaderTitle, setShowHeaderTitle] = useState('Showing All:')
  console.log(searchedExercises);

  

  return (
    <Box>
      <HeroBanner />
      <ExerciseSearch setSearchedExercises={setSearchedExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} setShowHeaderTitle={setShowHeaderTitle} />
      <Exercises searchedExercises={searchedExercises} setSearchedExercises={setSearchedExercises} bodyPart={bodyPart} setShowHeaderTitle={setShowHeaderTitle} showHeaderTitle={showHeaderTitle} />
      </Box>
    )
}

export default Home