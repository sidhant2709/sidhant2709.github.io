import React from 'react'
import TechnologyCarousel from './TechnologyCarousel'

const Technology = () => {
    return (
        <div id ="technologies" className="technologies">
            <h1>Proficiencies</h1>
            <div className="container">
                <div className="technologies-content">
                    <TechnologyCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Technology
