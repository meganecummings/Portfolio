import React, { Component } from 'react';

import megPhoto from './meg-headshot.jpg';
import './About.css';
import {Table, Row, Col, Container} from 'react-bootstrap';
import resume from './resume.pdf';

class About extends Component {
    render() {

    return(
        <div className="grid-wrapper">
            <div id="about" className="col-third">
                <div class="container">
                    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" ></path>
                    </svg>
                    <img src={megPhoto} className="white-border" alt="Meg's sweet face"></img>
                </div>
            </div>
            <div className="about col-side">
                <h3 className="about-heading">Hello! <br/> I'm Megan.</h3>
                <p className="about-title"> I'm an aspiring Software Engineer with a passion for building thoughtful and intuitive applications. </p>
                <div className="mt-4 pt-2">
                    <p className="about-body">Checkout some of my experience:</p>
                    <button 
                        href="https://github.com/meganecummings" target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom btn-round"><i className="fab fa-github-alt fa-i"></i>  Github</button>
                    <button 
                        href={resume} target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom btn-round"><i className="far fa-id-badge fa-i"></i>     Resume</button>
                </div>
                <br/>
                
             </div>
        </div>
    )
    }
}

export default About;