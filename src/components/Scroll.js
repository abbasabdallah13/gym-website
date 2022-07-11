import React from 'react'

const Scroll = ({data}) => {
    const elems = document.querySelectorAll('[key=""]');
    console.log(elems);

    const slideRight = () => {
        elems.map(item =>{
        console.log(data);
        const itemDetails = item.getBoundingClientRect();
        item.scrollLeft += itemDetails.width;
    })
    };

    const slideLeft = () => {
        elems.map(item =>{
            const itemDetails = item.getBoundingClientRect();
            item.scrollRight -= itemDetails.width;
        })
        };


  return (
<div style={{display: 'flex'}}>
    <span onClick={slideRight} className='carousel-arrows'>&lt;</span>
    <span onClick={slideLeft} className='carousel-arrows'>&gt;</span>
    </div>  )
}

export default Scroll