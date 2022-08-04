import React, { useEffect,useState } from 'react'
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import Scroll from './Scroll';
import Loader from './Loader';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, bool, cardWidth, gap, setShowHeaderTitle, showHeaderTitle, extraStyles}) => {
  const [detailsSliderWidth, setDetailsSliderWidth] = useState(0);
  useEffect(() => {
    if(window.screen.width <= 600){
      setDetailsSliderWidth()
    }
  
    
  }, [])
  

  if(!data) return <Loader />;

  return (
    <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column'}}>
    <div className='slider-container'>
        {bool?data.map(item => (
           <div key={item} >
                <BodyPart showHeaderTitle={showHeaderTitle} setShowHeaderTitle={setShowHeaderTitle} item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} data={data} />
            </div>
        )):data.map((item,index) => (
          <div style={{}} key={item}>
               <ExerciseCard key={item.name+''+ index} el={item} index={index} extraStyles={extraStyles} />
           </div>
       ))
        }
    </div>
    <Scroll cardWidth={cardWidth}  gap={gap} />
    </div>
    
    
  )
}

export default HorizontalScrollBar