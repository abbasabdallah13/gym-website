import React from 'react'
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    const exerciseByIdLink = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;

    const exerciseByIdData = await fetchData(exerciseByIdLink, exerciseOptions);
    console.log(exerciseByIdData);
  }, [id])
  

  return (
    <div>
    <Details id={id} />
    <ExerciseVideos />
    <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail