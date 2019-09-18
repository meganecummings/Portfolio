import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="underline border">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#inspiration">Inspiration</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        )
    }
};

export default NavBar;