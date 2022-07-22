import React from 'react'

const Scroll = ({cardWidth,cardsPerContainer,gap, leftArrow, rightArrow}) => {
    const scrollByContainerWidth = cardWidth * cardsPerContainer + gap;
    let clicks = 0;
    
    
    const slideRight = () => {
        const container = document.querySelector('.slider-container');

        if(container.scrollLeft % scrollByContainerWidth !== 0){
            container.scrollLeft = clicks*scrollByContainerWidth;
        }else{
        container.scrollLeft += scrollByContainerWidth;
        clicks += 1;
        console.log(clicks);
        console.log(container.scrollLeft);
        }
        
    };

    const slideLeft = () => {
        const container = document.querySelector('.slider-container');
        if(clicks !== 0){
            clicks-=1;
            }
        if(container.scrollLeft % scrollByContainerWidth !== 0){
            container.scrollLeft = clicks*scrollByContainerWidth;
        }else{
        container.scrollLeft -= scrollByContainerWidth;
        }    
    };


  return (
<div>
    <span onClick={() => slideLeft()} className='carousel-arrows arrowLT' style={leftArrow}>&lt;</span>
    <span onClick={() => slideRight()} className='carousel-arrows arrowGT' style={rightArrow}>&gt;</span>
    </div>  )
}

export default Scroll