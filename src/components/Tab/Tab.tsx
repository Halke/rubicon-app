import React, {useState} from 'react'
import TabButton from '../Buttons/TabButton/TabButton'
import './styles.css'

function Tab() {

    const [moviesActive, setMoviesActive] = useState(true)

    return (
        <div className="tab">
            {/* Buttons za mijenjanje tabova */}
            <div className="tab__change-tab-btns">
                {/* Movies TAB */}
                <TabButton 
                    onClick={() => setMoviesActive(!moviesActive)} 
                    buttonText="Movies" 
                    isActive={moviesActive ? true : false} 
                />

                {/* TV Shows TAB */}
                <TabButton 
                    onClick={() => setMoviesActive(!moviesActive)} 
                    buttonText="TV Shows" 
                    isActive={moviesActive ? false : true} 
                />
            </div>

            {/* Search Bar Section */}
            <div className="tab__search-bar">

            </div>

            {/* Tab za prikaz sadrzaja */}
            <div className="tab__content">

            </div>
        </div>
    )
}

export default Tab
