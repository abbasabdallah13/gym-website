import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { fetchData, exerciseOptions,youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseByIdDetails, setExerciseByIdDetails] = useState({});
const [exerciseYoutubeVideos, setExerciseYoutubeVideos] = useState([]);  
  useEffect(() => {

    const fetchExerciseData = async () => {
    const exerciseByIdLink = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
    const youtubeSearchLink = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseByIdDetails = await fetchData(exerciseByIdLink, exerciseOptions);
    setExerciseByIdDetails(exerciseByIdDetails);

    const exerciseYoutubeVideosFetch = await fetchData(`${youtubeSearchLink}/search?query=${exerciseByIdDetails.name} exercise`,youtubeOptions)
    setExerciseYoutubeVideos(exerciseYoutubeVideosFetch.contents.slice(0,4));
    console.log(exerciseYoutubeVideos);
  }


    fetchExerciseData();
  }, [id])
  

  return (
    <div>
    <Details element={exerciseByIdDetails} />
    <ExerciseVideos videos={exerciseYoutubeVideos} exerciseDetails = {exerciseByIdDetails} />
    <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail