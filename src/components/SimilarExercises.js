import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({exercisesByTarget}) => {
  if(!exercisesByTarget) return <Loader />;
  
  const obj = {
    data:exercisesByTarget, 
    bool:false, 
    styles:{width: '1110px',
    height: '550px'
  }, 
    cardWidth:350, 
    cardsPerContainer:3, 
    gap:90,
    leftArrow:{top: '200px', left: '-70px'},
    rightArrow:{top: '200px', right: '-70px'}
    }
  return (
    <div style={{marginTop: '120px'}}>
    <h1 style={{marginBottom: '50px', marginTop:'20px', marginLeft: '20px'}}>Check exercises with the same target muscle: </h1>
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent: 'center'}}>
      <HorizontalScrollBar {...obj} />
    </div>
    </div>
  )
}

export default SimilarExercises