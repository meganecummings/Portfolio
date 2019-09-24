import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll';
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

        //     <nav className="hamburger fixed-top navbar-expand-lg white navbar custom-nav sticky">
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <ul className="collapse navbar-collapse" >
        //             <li className="navbar-link"><AnchorLink href="#header"><i className="fas fa-home"></i></AnchorLink></li>
        //             <li className="navbar-link"><AnchorLink href="#about" >About</AnchorLink></li>
        //             <li className="navbar-link"><AnchorLink href="#work" >Work</AnchorLink></li>
        //             <li className="navbar-link"><AnchorLink href="#contact" >Contact</AnchorLink></li>
        //         </ul>
        // </nav>
        )
    }
};

export default NavBar;