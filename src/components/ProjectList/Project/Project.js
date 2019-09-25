import React from 'react';

import Wayfarer from './wayfarer.png';
import Profile from './CSwap-Profile.png';
import Languages from './Languages/Languages';
import './Project.css';

const Project = () => {
    return(
        <>
            <div className="project clothingswap card">
                <div className="img-container">
                    <a href="https://meganecummings.github.io/clothingswap-app/" >
                        <img className="card-img" src={Profile} alt="clothingswap homepage" className="card-img"/>
                    </a>
                </div>
                <div className="card-body">
                    <div className="card-header">Clothing Swap</div>
                    <div className="types">
                        <Languages /> 
                    </div>
                    <div className="card-text">
                        <p>ClothingSwap is MERN stack application for creating and managing your own clothing swap events.</p>
                    </div>
                </div>
            <div className="mt-4 pt-2">
                <button 
                    href="https://github.com/meganecummings/clothingswap-app" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt fa-i"></i>
                    Github</button>
            </div>
        </div>
        
        <div className="project wayfarer">
            <a href="https://edfranco.github.io/register">
                <img className="project-img" src={Wayfarer} alt="Wayfarer" />
            </a>
            <h2 className="project-title">Wayfarer</h2>
            <div className="mt-4 pt-2">
                <button 
                    href="https://github.com/pouyarezvani/Project-4-Wayfarer" target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom btn-round"><i className="fab fa-github-alt fa-i"></i>
                    Github</button>
            </div>
            <p className="project-description">Wayfarer is a technical concept project based off of rough wireframes from clients. The MERN Stack Application aims to bring weary travelers to share stories and build connections around their discoveries in popular cities.</p>
            <Table hover border >
                <tbody className="table keyword">
                    <tr>
                        <td><i className="fab fa-react"></i> React</td>
                        <td><i className="fab fa-node"></i> Node.js</td>
                        <td><i className="fas fa-server"></i> Express</td>
                        <td><i className="fab fa-database"></i> Mongoose </td>
                    </tr>
                </tbody >
                </Table>

        </div>
    </>
);
};

export default Project;