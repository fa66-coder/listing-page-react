import { useState } from 'react'
//NOTE : can directly use src/images/pg.jpg instead of importing
// import searchIcon from "../../images/search.png"
// import BackIcon from "../../images/Back.png"
// import navBarImg from "../../images/nav_bar.png"
import './DashboardToolBar.css'

export default function DashboarToolBar() {
    return (
        <div className='toolbar-container' style={{ backgroundImage:`url('src/images/nav_bar.png')` }}>
            <img src='src/images/Back.png' className='navImages backIcon' alt='back icon' />
            <h3> Romantic Comedy </h3>
            <img src='src/images/search.png' className='navImages searchIcon' alt='search image'/>
        </div>
    )
}
// onClick={gotoDashboard}