import React, { useState,useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Grid, Pagination, Typography } from '@mui/material'
import { textTransform } from '@mui/system';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ searchedExercises, setSearchedExercises, bodyPart, setShowHeaderTitle, showHeaderTitle}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage - 1;
  const indexofFirstExercise = indexOfLastExercise + 1 - exercisesPerPage;
  const currentExercises = searchedExercises.slice(indexofFirstExercise, indexOfLastExercise+1); 

  const paginate =(e, value) =>{
    setCurrentPage(value);

    window.scrollTo({top:1265, behavior: 'smooth'});
  }


  useEffect(() => {
    const fetchExercises = async () =>{
      if(bodyPart === 'all'){
      const allExercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      setSearchedExercises(allExercises);
      }else{
        const exercisesByBodyPart = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        setSearchedExercises(exercisesByBodyPart);
        setShowHeaderTitle('Showing Results:')
      }
    }
    fetchExercises();
  }, [bodyPart])

  

  return (
    <div>
    <Typography id='exercises' variant='h3' mb='25px' >{showHeaderTitle}</Typography>
    <div className='gridContainerByAbbas'>
     {
      currentExercises.map((el, index) => {
     return <ExerciseCard el={el} index = {index} />
    })
     }
    </div>
    <div className='pagination'>
    {
      searchedExercises.length > 9 && (
        <Pagination 
          color='standard'
          shape='rounded'
          variant='outlined'
          count={Math.ceil(searchedExercises.length/exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large' />
      )
    }
    </div>
    </div>
  )
}

export default Exercises