import './ImageGridLayout.css'
import React from 'react'

export default function ImageGridItem({posterImage, posterName}) {
    const posterClass = posterImage.slice(0,posterImage.indexOf('.'))
    function handleMissingImages(event) {
        event.target.src= `src/images/placeholder_for_missing_posters.png`
    }   
    return(
    <div className='grid-item'  >
     <img src={`src/images/${posterImage}`} className={`grid-images ${posterClass}`} onError={handleMissingImages} alt={posterClass} loading="lazy"/>
         <div> {posterName} </div>
         </div>   
    )
}