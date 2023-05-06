import './ImageGridLayout.css'
import React, { forwardRef, useState } from 'react'
import LoadingSpinner from "../Common/LoadingSpinner";

const ImageGridItem = forwardRef(({ posterImage, posterName }, ref) => {
    let [imagesLoadedStatus, setImageLoadedStatus] = useState(false)
    const posterClass = posterImage.slice(0, posterImage.indexOf('.'))
    function handleMissingImages(event) {
        event.target.src = `./placeholder_for_missing_posters.png`
    }
    return (
        <div className='grid-item' ref={ref} >
            {!imagesLoadedStatus && <LoadingSpinner />}
            {/* Till the image load keep the spinner and hide the incomplete load image */}
            <img style={imagesLoadedStatus ? {} : { display: 'none' }} src={`./${posterImage}`} className={`grid-images ${posterClass}`}
                onLoad={() => setImageLoadedStatus(true)}
                onError={handleMissingImages} alt={posterClass} />
            <div className="titlePoster"> {posterName} </div>
        </div>
    )
});

export default ImageGridItem