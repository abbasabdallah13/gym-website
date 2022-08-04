import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { fetchData, exerciseOptions,youtubeOptions } from '../utils/fetchData';
import {allExercisesArr} from '../utils/exercisesData'

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseByIdDetails, setExerciseByIdDetails] = useState({});
const [exerciseYoutubeVideos, setExerciseYoutubeVideos] = useState([]);  
const [exercisesByTarget, setExercisesByTarget] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
    // const exerciseByIdLink = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
       const youtubeSearchLink = 'https://youtube-search-and-download.p.rapidapi.com';
      //    const exercisesByTargetMuscle = 'https://exercisedb.p.rapidapi.com/exercises/target/';

    // const exerciseByIdDetails = await fetchData(exerciseByIdLink, exerciseOptions);
    // setExerciseByIdDetails(exerciseByIdDetails);
    
    for(let i=0; i<allExercisesArr.length; i++){
      for(const[key,value] of Object.entries(allExercisesArr[i])){
        if(key === 'id' && value === id){
          setExerciseByIdDetails(allExercisesArr[i]);
        }
      } 
    }

    const exerciseYoutubeVideosFetch = await fetchData(`${youtubeSearchLink}/search?query=${exerciseByIdDetails.name} exercise`,youtubeOptions)
    setExerciseYoutubeVideos(exerciseYoutubeVideosFetch.contents.slice(0,4));

    // const fetchExercisesByTargetMuscle = await fetchData(`${exercisesByTargetMuscle}abs`,exerciseOptions);
    //   setExercisesByTarget(fetchExercisesByTargetMuscle);

    const exercisesByTargetArr = [];
    let target = 'test';
    for(let i=0; i<allExercisesArr.length; i++){
      for(const[key,value] of Object.entries(allExercisesArr[i])){
        if(key === 'id' && value === id && target === 'test'){
           target = allExercisesArr[i]['target']; //the below if statement will always execute nothing untill this statement here is executed then it starts from index 0 executing
           i=0;
        }
        if(key === 'id' && allExercisesArr[i]['target'] == target){
            exercisesByTargetArr.push(allExercisesArr[i]);
        }
        }
      } 
    setExercisesByTarget(exercisesByTargetArr);

  }


    fetchExerciseData();
  }, [id])
  

  return (
    <div>
    <Details element={exerciseByIdDetails} />
    <ExerciseVideos videos={exerciseYoutubeVideos} exerciseDetails = {exerciseByIdDetails} />
    <SimilarExercises exercisesByTarget={exercisesByTarget} />
    </div>
  )
}

export default ExerciseDetail