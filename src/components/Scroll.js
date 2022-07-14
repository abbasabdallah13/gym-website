import React from 'react'

const Scroll = ({data}) => {
    console.log(data);
    const elems = [...document.querySelectorAll('[allBodyPartCards=bodypart-card]')];
    console.log(elems);
   
    const slideRight = () => {
        const cardWidth = elems[0].getBoundingClientRect().width;
        const container = document.getElementsByClassName('categories-container');
        container[0].scrollLeft += cardWidth*4;
    };

    const slideLeft = () => {
        const cardWidth = elems[0].getBoundingClientRect().width;
        const container = document.getElementsByClassName('categories-container');
        container[0].scrollLeft -= cardWidth*4;

        };
        document.addEventListener('mousemove', (e)=>{
            console.log(`x: ${e.pageX} and y: ${e.pageY}`);
        })

  return (
<div >
    <span onClick={slideLeft} className='carousel-arrows arrowLT'>&lt;</span>
    <span onClick={slideRight} className='carousel-arrows arrowGT '>&gt;</span>
    </div>  )
}

export default Scroll