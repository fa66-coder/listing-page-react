import './ImageGridLayout.css'
import React, { Component } from 'react'

export default function ImageGridItem({posterImage, posterName}) {
    const posterClass = posterImage.slice(0,posterImage.indexOf('.'))
    // let imgClasses = `grid-images ${posterClass}`
    return(
    <React.Fragment>
        <img src={`src/images/${posterImage}`} className={`grid-images ${posterClass}`} alt='poster 1 image' loading="lazy"/>
         <div> {posterName} </div>
    </React.Fragment>
    )
}