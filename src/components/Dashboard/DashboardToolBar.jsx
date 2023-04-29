import { useEffect, useState } from 'react'
//NOTE : can directly use src/images/pg.jpg instead of importing
// import searchIcon from "../../images/search.png"
// import BackIcon from "../../images/Back.png"
// import navBarImg from "../../images/nav_bar.png"
import './DashboardToolBar.css'

export default function DashboarToolBar({onInputUpdate}) {
    let [showSearch, setShowSearch] = useState(true)
    let [showBackButton, setShowBackButton] = useState(true)
    let [showSearchInput, setShowSearchInput] = useState(false)
    let [searchFilter, setSearchFilter] = useState('')

    useEffect(()=>{
        onInputUpdate(searchFilter)
    },[searchFilter]);

    function onBackButtonClick() {
        setShowSearch(false)
        setShowBackButton(false)
        setShowSearchInput(false)
    }

    function onSearchClick() {
        setShowSearchInput(!showSearchInput)
    }

    function onFilterText(event) {
        setSearchFilter(event.target.value)
    }

    return (
        <div className='toolbar-container' style={{ backgroundImage:`url('src/images/nav_bar.png')` }}>
            {showBackButton && <img src='src/images/Back.png' className='navImages backIcon' alt='back icon' onClick={onBackButtonClick}/>}
            <h3> Romantic Comedy </h3>
            {showSearchInput && <input type='text' class="searchInput" onChange={onFilterText}/>}
            {showSearch && <img src='src/images/search.png' className={`navImages searchIcon ${!showSearchInput ? 'apply-margin' : ''}`} alt='search image'  onClick={onSearchClick}/>}
        </div>
    )
}