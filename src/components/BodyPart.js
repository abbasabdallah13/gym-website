import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ showHeaderTitle, setShowHeaderTitle, item, bodyPart, setBodyPart, data}) => {
  const clickedCategory = () => {
    data.map(el => {
      document.getElementById(el).style.borderTop = 'unset';
    })
    document.getElementById(item).style.borderTop = '3px solid red';
  }

  return (
    <div className = 'bodyPart-card' id={item}
    onClick={() => {
      setBodyPart(item);
      clickedCategory();
      // console.log(setShowHeaderTitle);
      // setShowHeaderTitle('Showing Results:');
      if(window.screen.width <=600){
        let navbarHeight = document.getElementsByClassName('navbar')[0].getBoundingClientRect().height;
        window.scrollTo({top: document.querySelector('#exercises').getBoundingClientRect().y+document.documentElement.scrollTop-navbarHeight, behavior:'smooth'});
      }else{
      window.scrollTo({top: document.querySelector('#exercises').getBoundingClientRect().y+document.documentElement.scrollTop, behavior:'smooth'});
      }}}
      >
      <img src={Icon} />
      <p>{item}</p>
    </div>                                                                                              
  )
}

export default BodyPart