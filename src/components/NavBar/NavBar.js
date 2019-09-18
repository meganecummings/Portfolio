import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="underline border">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        )
    }
};

export default NavBar;