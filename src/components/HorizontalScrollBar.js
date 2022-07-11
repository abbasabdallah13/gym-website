import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import Scroll from './Scroll';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart}) => {
  const slideRight = () => {

  }

  return (
    <div style={{position: 'relative'}}>
    <div className='categories-container'>
        {data.map(item => (
           <div key={item} itemId={item}>
                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
        ))}
    </div>
    <Scroll data={data} />
    </div>
    
    
  )
}

export default HorizontalScrollBar