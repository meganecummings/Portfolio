import React from 'react';
import {Table} from 'react-bootstrap';

// import Quotes from '../../Quotes/Quotes';
import Wayfarer from './wayfarer.png';
import Profile from './CSwap-Profile.png';

const Project = () => {
    return(
        <div id="project" className="container">
            <div className="project clothingswap">
                <a href="https://pages.git.generalassemb.ly/megcummings/clothingswap/" >
                    <img className="project-img" src={Profile} alt="clothingswap homepage"/>
                </a>
                <h2 className="project-title">Clothing Swap</h2>
                <p className="project-description">ClothingSwap is an React application for creating and managing your own clothing swap events. API integration with SendGrid & FormSpree for easy Contact and Messaging to your invitees.</p>
                <Table hover border>
                    <tbody className="table keyword">
                    <tr>
                        <td><i class="fab fa-react"></i> React</td>
                        <td><i class="fab fa-node"></i> Node.js</td>
                        <td><i class="fas fa-server"></i> Express</td>
                        <td><i class="fab fa-database"></i> Mongoose </td>
                    </tr>
                </tbody >
                </Table>
            </div>
            <div className="project wayfarer">
                <a href="https://edfranco.github.io/wayfarer/">
                    <img className="project-img" src={Wayfarer} alt="Wayfarer" />
                </a>
                <h2 className="project-title">Wayfarer</h2>
                <p className="project-description">Wayfarer is a technical concept project based off of rough wireframes from clients. The MERN Stack Application aims to bring weary travelers to share stories and build connections around their discoveries in popular cities.</p>
                <Table hover border >
                    <tbody className="table keyword">
                        <tr>
                            <td><i class="fab fa-react"></i> React</td>
                            <td><i class="fab fa-node"></i> Node.js</td>
                            <td><i class="fas fa-server"></i> Express</td>
                            <td><i class="fab fa-database"></i> Mongoose </td>
                        </tr>
                    </tbody >
                    </Table>

            </div>
        </div>
    );
};

export default Project;