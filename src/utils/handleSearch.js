import { allExercisesArr } from "./exercisesData";

export  const handleSearch = async (searchedExercises, search, fetchData, exerciseOptions, setSearch, setSearchedExercises, setShowHeaderTitle, setBodyPart,setIsLoading, bodyPart, isLoading) =>{
  if(searchedExercises.length===0) setIsLoading(true);  
  if(search){
      // const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const outputExercises = allExercisesArr.filter((exercise) => {
        if(exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search)){
          setShowHeaderTitle(`Showing Results: ${search} `);
          return exercise;
        }
      })
      
      console.log(outputExercises);
      if(!outputExercises.length){setIsLoading(false)};
      if(window.screen.width <=600){
        let navbarHeight = document.getElementsByClassName('navbar')[0].getBoundingClientRect().height;
        window.scrollTo({top: document.querySelector('#exercises').getBoundingClientRect().y+document.documentElement.scrollTop-navbarHeight, behavior:'smooth'});
      }else{
      window.scrollTo({top: document.querySelector('#exercises').getBoundingClientRect().y+document.documentElement.scrollTop, behavior:'smooth'});
      }
      setSearch('');
      setSearchedExercises(outputExercises);
      setBodyPart('');
      setIsLoading(false);
      console.log(bodyPart);
    }
  } 