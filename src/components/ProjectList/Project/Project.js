import React from 'react';

import Wayfarer from './wayfarer.png';
import Profile from './CSwap-Profile.png';
import './Project.css';

const Project = () => {
    return(

        <>
            <div className="project clothingswap">
                <div className="types">
                    <div className="react type"><i className="fab fa-react"></i>React</div>
                    <div className="node type"><i className="fab fa-node"></i> Node.js</div>
                    <div className="express type"><i className="fas fa-server"></i> Express</div>
                    <div className="mongoose type"><i className="fas fa-database"></i> Mongoose </div>            
                </div>
                <div className="img-container">
                    <a href="https://meganecummings.github.io/clothingswap-app/" >
                        <img src={Profile} alt="clothingswap homepage" className="project-img"/>
                    </a>
                </div>
                <div className="project-body">
                    <div className="project-header">Clothing Swap</div>
                    <div className="project-text">
                        <p>ClothingSwap is MERN stack application for creating and managing your own clothing swap events.</p>
                        <button 
                            href="https://github.com/meganecummings/clothingswap-app" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt fa-i"></i>
                            Github</button>
                    </div>
                </div>
            </div>
            <div className="project wayfarer">
                <div className="types">
                    <div className="type react"><i className="fab fa-react"></i> React</div>
                    <div className="type node"><i className="fab fa-node"></i> Node.js</div>
                    <div className="type express"><i className="fas fa-server"></i> Express</div>
                    <div className="type mongoose"><i className="fas fa-database"></i> Mongoose </div>
                </div>
                <div className="img-container">
                    <a href="https://edfranco.github.io/register">
                        <img className="project-img" src={Wayfarer} alt="Wayfarer" />
                    </a>
                </div>
                <div className="project-body">
                    <h2 className="project-header">Wayfarer</h2>
                    <button 
                        href="https://github.com/pouyarezvani/Project-4-Wayfarer" target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom btn-round"><i className="fab fa-github-alt fa-i"></i>
                        Github</button>
                    <p className="project-text">Wayfarer is a technical concept project based off of rough wireframes from clients. The MERN Stack Application aims to bring weary travelers to share stories and build connections around their discoveries in popular cities.</p>
                </div>
            </div>
        </>
    );
};

export default Project;