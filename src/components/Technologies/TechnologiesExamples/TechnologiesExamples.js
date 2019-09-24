import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './TechnologiesExamples.css';

const TechnologiesExamples = () => {
    return(
        <Container className="tech" hover="true">
                <Row>
                    <Col className="tech" lg><i className="fab fa-js"></i> JavaScript</Col>
                    <Col className="tech"  lg><i className="fab fa-react"></i> React</Col>
                </Row>
                <Row>
                    <Col className="tech"  lg><i className="fab fa-node"></i> Node.js</Col>
                    <Col className="tech"  lg><i className="fab fa-python"></i> Python</Col>
                </Row>
                <Row>
                    <Col className="tech"  lg><i className="fas fa-server"></i> Express</Col>
                    <Col className="tech"  lg><i className="fas fa-server"></i> Django</Col>              
                </Row>
                <Row>
                    <Col className="tech"  lg><i className="fas fa-database"></i> MongoDB & SQL </Col>
                    <Col className="tech" lg><i className="fab fa-html5"></i> HTML & CSS <i className="fab fa-css3-alt"></i></Col>
                </Row>
            </Container>
    )
};

export default TechnologiesExamples;