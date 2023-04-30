import './ImageGridLayout.css'
import React from 'react'

export default function ImageGridItem({posterImage, posterName}) {
    const posterClass = posterImage.slice(0,posterImage.indexOf('.'))
    return(
    <div className='grid-item'  >
     <img src={`src/images/${posterImage}`} className={`grid-images ${posterClass}`} alt='poster 1 image' loading="lazy"/>
         <div> {posterName} </div>
         </div>   
    )
}