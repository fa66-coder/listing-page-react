import { useState } from 'react'
import searchIcon from "../../images/search.png"
import BackIcon from "../../images/Back.png"
import navBarImg from "../../images/nav_bar.png"
import './DashboardToolBar.css'

export default function DashboarToolBar() {
    return (
        <div className='toolbar-container' style={{ backgroundImage:`url(${navBarImg})` }}>
            <img src={BackIcon} className='navImages backIcon' alt='back icon'/>
            <h3> Romantic Comedy </h3>
            <img src={searchIcon} className='navImages searchIcon' alt='search image'/>
        </div>
    )
}