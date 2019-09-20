import React, { Component } from 'react';

import megPhoto from './meg-headshot.jpg';
import './About.css';
import {Table, Row, Col, Container} from 'react-bootstrap';
import resume from './resume.pdf';

class About extends Component {
    render() {

    return(
        <>
            <div id="about" className="col-third">
                <img src={megPhoto} alt="Meg's sweet face"></img>
            </div>
            <div className="about col-side">
                <h3 className="about-heading">About Me</h3>
                <p className="about-body"> I'm a burgeoning <span className="keyword" >Software Engineer</span> with a passion for building thoughtful and intuitive applications. <br/>After spending almost a decade in Operations, I found myself <span className="keyword" >hungry</span> to move upstream in the product lifecycle, to be the <span className="keyword" >builder</span>, to create and to engineer the products that are changing the world around us. I believe in the power of tech <span className="keyword" >to make a difference</span> in the world, to innovate and to help people in their everyday lives and beyond.</p>
                <div class="mt-4 pt-2">
                    <a href="https://github.com/meganecummings" target="_blank"
                        class="btn btn-custom btn-round"><i class="fab fa-github-alt fa-i"></i>Github</a>
                    <a href={resume} target="_blank"
                        class="btn btn-custom btn-round"><i class="far fa-id-badge fa-i"></i>Resume</a>
                </div>
                <br/>
                <h4>Technologies</h4>
                <p className="about-body"> In only 4 short months of programming, I've learned over 12 various languages and frameworks. I've listed some that I've been experimenting with more recently...</p>
                <br/>
                <Container hover>
                    <Row>
                        <Col className="tech" lg><i class="fab fa-js"></i> JavaScript</Col>
                        <Col className="tech"  lg><i class="fab fa-react"></i> React</Col>
                    </Row>
                    <Row>
                        <Col className="tech"  lg><i class="fab fa-node"></i> Node.js</Col>
                        <Col className="tech"  lg><i class="fab fa-python"></i> Python</Col>
                    </Row>
                    <Row>
                        <Col className="tech"  lg><i class="fas fa-server"></i> Express</Col>
                        <Col className="tech"  lg><i class="fas fa-server"></i> Django</Col>              
                    </Row>
                    <Row>
                        <Col className="tech"  lg><i class="fas fa-database"></i> MongoDB & SQL </Col>
                        <Col className="tech" lg><i class="fab fa-html5"></i> HTML & CSS <i class="fab fa-css3-alt"></i></Col>
                    </Row>
                </Container>
             </div>
        </>
    )
    }
}

export default About;