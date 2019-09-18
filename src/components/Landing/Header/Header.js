import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import './Header.css';

const Header = () => {
    return(
        <header className="vertical-center">
            <div>
                <h1><a href="">Meg Cummings</a></h1>
            </div>
        </header>
    )
}

export default Header;

