import React, { useEffect, useState } from 'react'

const Scroll = ({cardWidth,gap}) => {
    const [rem, setRem] = useState(0);
    const [cardsPerContainer, setCardsPerContainer] = useState(0);
    useEffect(() => {
        if(rem === 0){
            setRem(window.getComputedStyle(document.body).fontSize.toString().replace('px',''));
        };
        if(window.screen.width > 950){
            setCardsPerContainer(4);
        }else if(window.screen.width<=950 && window.screen.width>=600){
            setCardsPerContainer(3);
        }else if(window.screen.width < 600){
            setCardsPerContainer(2);
        }
        window.addEventListener('resize', (e)=>{
             setRem(window.getComputedStyle(document.body).fontSize.toString().replace('px',''));
            if(window.screen.width > 950){
                setCardsPerContainer(4);
            }else if(window.screen.width<=950 && window.screen.width>=600){
                setCardsPerContainer(3);
            }else if(window.screen.width < 600){
                setCardsPerContainer(2);
            }
        }) 
    }, [])
     
    const scrollByContainerWidth = cardWidth  * rem * cardsPerContainer + gap;
    let clicks = 0;

    
    
    
    const slideRight = () => {
        const container = document.querySelector('.slider-container');

         
        container.scrollLeft += scrollByContainerWidth;
        clicks += 1;        
        
    };

    const slideLeft = () => {
        const container = document.querySelector('.slider-container');
        if(clicks !== 0){
            clicks-=1;
            }
       
        container.scrollLeft -= scrollByContainerWidth;
            
    };


  return (
<div className='arrows-container'>
    <span onClick={() => slideLeft()} className='carousel-arrows'>&lt;</span>
    <span onClick={() => slideRight()} className='carousel-arrows'>&gt;</span>
    </div>  )
}

export default Scroll