import React,{useState ,useEffect} from 'react'


import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import ExerciseSearch from '../components/ExerciseSearch';


const Home = () => {
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [showHeaderTitle, setShowHeaderTitle] = useState('Showing:')
  const [search, setSearch] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);

  

  

  return (
    <div style={{position: 'relative'}}>
      <HeroBanner search={search} setSearch={setSearch} />
      <ExerciseSearch searchedExercises={searchedExercises} setSearchedExercises={setSearchedExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} setShowHeaderTitle={setShowHeaderTitle} showHeaderTitle={showHeaderTitle} search={search} setSearch={setSearch} isLoading={isLoading} setIsLoading={setIsLoading}/>
      <Exercises searchedExercises={searchedExercises} setSearchedExercises={setSearchedExercises} bodyPart={bodyPart} setShowHeaderTitle={setShowHeaderTitle} showHeaderTitle={showHeaderTitle}  isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
    )
}

export default Home