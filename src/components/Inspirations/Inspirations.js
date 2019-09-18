import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Inspiration from './Inspiration/Inspiration.js';
import './Inspirations.css';

const Inspirations = () => {
    return(
        <div id="inspiration">
            <h3>Recent Inspiration</h3>
            <ul>
                <Inspiration /> 
            </ul>
        </ div>
    );
};

export default Inspirations;