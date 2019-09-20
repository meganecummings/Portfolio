import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="hamburger fixed-top navbar-expand-lg white navbar custom-nav sticky">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="collapse navbar-collapse" >
                    <li className="navbar-link"><AnchorLink href="#header"><i class="fas fa-home"></i></AnchorLink></li>
                    <li className="navbar-link"><AnchorLink href="#about" >About</AnchorLink></li>
                    <li className="navbar-link"><AnchorLink href="#work" >Work</AnchorLink></li>
                    <li className="navbar-link"><AnchorLink href="#contact" >Contact</AnchorLink></li>
                </ul>
        </nav>
        )
    }
};

export default NavBar;