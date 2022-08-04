import React from 'react'
import Loader from './Loader';
import BodyPartIcon from '../assets/icons/body-part.png';
import TargetIcon from '../assets/icons/target.png';
import EquipmentIcon from '../assets/icons/equipment.png';

const Details = ({element}) => {
  if(!element) return <Loader />;
  const iconsDetails = [
    {
      icon: BodyPartIcon,
      name: element.bodyPart
    },
    {
      icon: TargetIcon,
      name: element.target
    },
    {
      icon: EquipmentIcon,
      name: element.equipment
    }
  ]
  return (
    <div className='details-container'>
      <div className='details-img'>
        <img  src={element.gifUrl} alt='exercise gif' />
      </div>
      <div className='details-info'>
        <h1>{element.name}</h1>
        <p>Exercises keep you strong.&nbsp; 
        <span>{element.name}</span> is one of the best exercises to target your {element.target}.&nbsp;It will help you improve your mood and gain energy.
        Remember to never give up because dedication is the number one key to witness effects.</p>
        <div className='mobileWrapper'>
        <div className='details-btns-container' >{iconsDetails.map(el => (
          
          <div className='details-btns'>
            <img src={el.icon} className='exercise-detail-buttons'/>
            <h2>{el.name}</h2>
          </div>
        ))
        }</div>
        </div>
      </div>
    </div>
  )
}

export default Details