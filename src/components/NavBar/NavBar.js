import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.css';
import resume from '../About/resume.pdf';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" className="hamburger fixed-top navbar-expand-lg white navbar custom-nav sticky title" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#header"><i className="fas fa-home"></i></Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/meganecummings"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Github</NavDropdown.Item>
                        <NavDropdown.Item href="https://linkedin.com/in/megancummings" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >LinkedIn </NavDropdown.Item>
                        <NavDropdown.Item href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        >Resume</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        )
    }
};

export default NavBar;