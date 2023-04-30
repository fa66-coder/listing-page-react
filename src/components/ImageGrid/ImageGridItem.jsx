import './ImageGridLayout.css'
import React, { forwardRef } from 'react'

const ImageGridItem = forwardRef(({ posterImage, posterName }, ref) => {
    const posterClass = posterImage.slice(0, posterImage.indexOf('.'))
    function handleMissingImages(event) {
        event.target.src = `src/images/placeholder_for_missing_posters.png`
    }
    return (
        <div className='grid-item' ref={ref} >
            <img src={`src/images/${posterImage}`} className={`grid-images ${posterClass}`} onError={handleMissingImages} alt={posterClass} loading="lazy" />
            <div className="posterName"> {posterName} </div>
        </div>
    )
});

export default ImageGridItem