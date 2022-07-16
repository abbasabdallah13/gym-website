import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'

const SimilarExercises = ({exercisesByTarget}) => {
  const obj = {
    data:exercisesByTarget, 
    bool:false, 
    styles:{width: '1110px'}, 
    cardWidth:350, 
    cardsPerContainer:3, 
    gap:90,
    leftArrow:{top: '200px', left: '-70px'},
    rightArrow:{top: '200px', right: '-70px'}
  }
  return (
    <div>
    <h1 style={{marginBottom: '20px', marginTop:'20px', marginLeft: '20px'}}>Check exercises with the same target muscle: </h1>
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent: 'center'}}>
      <HorizontalScrollBar {...obj} />
    </div>
    </div>
  )
}

export default SimilarExercises