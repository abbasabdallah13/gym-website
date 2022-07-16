import React, { useContext, useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import Scroll from './Scroll';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, bool, styles, cardWidth, cardsPerContainer, gap, leftArrow, rightArrow}) => {


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