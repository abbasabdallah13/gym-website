import React from 'react'
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import Scroll from './Scroll';
import Loader from './Loader';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, bool, styles, cardWidth, cardsPerContainer, gap, leftArrow, rightArrow}) => {
if(!data) return <Loader />;

  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
    <div style={styles} className='slider-container'>
        {bool?data.map(item => (
           <div key={item} itemId={item} allBodyPartCards='bodypart-card'>
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
        )):data.map((item,index) => (
          <div style={{marginRight: '30px'}} key={item} itemId={item}>
               <ExerciseCard key={item.name+''+ index} el={item} index={index} />
           </div>
       ))
        }
    </div>
    <Scroll cardWidth={cardWidth} cardsPerContainer={cardsPerContainer} gap={gap} leftArrow={leftArrow} rightArrow={rightArrow} />
    </div>
    
    
  )
}

export default HorizontalScrollBar