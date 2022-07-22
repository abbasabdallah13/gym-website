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
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <div>
        <img src={element.gifUrl} alt='exercise gif' style={{width: '600px', height:'600px'}} />
      </div>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-around', height: '500px', padding: '20px'}}>
        <h1 style={{textTransform: 'capitalize'}} >{element.name}</h1>
        <p style={{fontSize: '20px', color: '#847f80'}}>Exercises keep you strong.&nbsp; 
        <span style={{textTransform: 'capitalize'}}>{element.name}</span> is one of the best exercises to target your {element.target}.&nbsp;It will help you improve your mood and gain energy.
        Remember to never give up because dedication is the number one key to witness effects.</p>
        {iconsDetails.map(el => (
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={el.icon} className='exercise-detail-buttons'/>
            <h2 style={{textTransform: 'capitalize', marginLeft: '30px', fontSize: '20px', fontWeight: '400'}}>{el.name}</h2>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Details