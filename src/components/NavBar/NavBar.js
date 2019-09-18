import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="hamburger">
            <ul>
                <li><Link to="/pathLink#about" >About</Link></li>
                <li><Link to="/pathLink#work" >Work</Link></li>
                <li><Link to="/pathLink#inspiration" >Inspiration</Link></li>
                <li><Link to="/pathLink#contact" >Contact</Link></li>
            </ul>
        </nav>
        )
    }
};

export default NavBar;