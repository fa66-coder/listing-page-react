import { useEffect, useState } from 'react'
import './DashboardToolBar.css'

export default function DashboarToolBar({ onInputUpdate }) {
    let [showSearchInput, setShowSearchInput] = useState(false)
    let [showTitle, setShowTitle] = useState(true)
    let [searchFilter, setSearchFilter] = useState('')

    useEffect(() => {
        onInputUpdate(searchFilter)
    }, [searchFilter]);

    function onBackButtonClick() {
        setShowSearchInput(false)
        setShowTitle(true)
    }

    function onSearchClick() {
        setShowSearchInput(true)
        setShowTitle(false)
    }

    function onFilterText(event) {
        setSearchFilter(event.target.value)
    }

    return (
        <div className='toolbar-container' style={{ backgroundImage: `url('./nav_bar.png')` }}>
            <img src='./Back.png' className='navImages backIcon' alt='back icon' onClick={onBackButtonClick} />
            {showTitle && <h3 className="title"> Romantic Comedy </h3>}
            <div className="searchOption">
                {showSearchInput && <input type='text' className="searchInput" placeholder="Search using poster name" onChange={onFilterText} />}
                <img src='./search.png' className={`navImages searchIcon ${!showSearchInput ? 'apply-margin' : ''}`} alt='search image' onClick={onSearchClick} />
            </div>
        </div>
    )
}