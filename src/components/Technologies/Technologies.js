import React from 'react';
import TechnologiesExamples from './TechnologiesExamples/TechnologiesExamples.js';
import './Technologies.css';
import techImage from './techImage.jpg';

const Technologies = () => {
    return(
        <div className="grid-wrapper">
            <div id="about" className="tech-side">
                <div className="about-heading">
                    <h3 className="tech-heading">Technologies</h3>
                    <p className="tech-body"> Here are the Technologies I've been working with recently:</p>
                    <TechnologiesExamples />    
                </div>
            </div>  
            <div className="tech-third">
                <div className="container tech-container">
                        <img src={techImage} className="white-border tech-img" alt="computer with hands at keyboard"></img>
                    </div>
            </div>      
        </div>  
    );
};

export default Technologies;
