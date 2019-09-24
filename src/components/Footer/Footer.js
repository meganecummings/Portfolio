import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="wrap">
                <div className="social-links">
                    <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                <div class="button-wrapper contact-container" ><button href="mailto:megcummings@gmail.com" target="_blank" class="btn  regular contact">Get In Contact</button></div>
            </div>    
            <p className="copyright">&copy;2019 Meg Cummings</p>
        </footer>
    )
}


export default Footer;