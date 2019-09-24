import React from 'react';
import {Table} from 'react-bootstrap';

import Wayfarer from './wayfarer.png';
import Profile from './CSwap-Profile.png';

const Project = () => {
    return(
        <div id="project" className="container">
            <div className="project clothingswap">
                <a href="https://meganecummings.github.io/clothingswap-app/" >
                    <img className="project-img" src={Profile} alt="clothingswap homepage"/>
                </a>
                <h2 className="project-title">Clothing Swap</h2>
                <div className="mt-4 pt-2">
                    <button 
                        href="https://github.com/meganecummings/clothingswap-app" target="_blank" rel="noopener noreferrer"
                        className="btn btn-custom btn-round"><i className="fab fa-github-alt fa-i"></i>
                        Github</button>
                </div>
                <p className="project-description">ClothingSwap is an React application for creating and managing your own clothing swap events. API integration with SendGrid & FormSpree for easy Contact and Messaging to your invitees.</p>
                <Table hover border>
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
        </div>
    );
};

export default Project;