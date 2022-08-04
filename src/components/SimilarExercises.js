import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({exercisesByTarget}) => {
  if(!exercisesByTarget) return <Loader />;
  
  const obj = {
    data:exercisesByTarget, 
    bool:false, 
    cardWidth:13, 
    cardsPerContainer:3, 
    gap:0,
    extraStyles: {
      'borderTop': 'unset',
      'borderRight': '2px solid #d9d9d9',
    }
    }
  return (
    <div style={{marginTop: '1rem', padding: '1rem'}}>
    <h1 style={{marginBottom: '2rem', fontSize: '1.5rem', textDecoration: 'underline 0.3rem red'}}>Check exercises with the same target muscle: </h1>
    <div >
      <HorizontalScrollBar {...obj} />
    </div>
    </div>
  )
}

export default SimilarExercises