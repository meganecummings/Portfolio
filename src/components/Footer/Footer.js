import React from 'react';
import './Footer.css';
import resume from '../About/resume.pdf';


const Footer = () => {
    return(
        <footer>
            <div className="wrap">
                <div className="social-links">
                    <a href={resume} alt="Resume"><i className="far fa-id-badge fa-i" aria-hidden="true"></i></a>
                    <a href="https://github.com/meganecummings"  title="Github" aria-label="GitHub" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github-alt fa-i" title="Github" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/megancummings/" alt="LinkedIn" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin" aria-label="LinkedIn" aria-hidden="true"></i></a>
                </div>
                <div className="button-wrapper contact-container" ><a href="mailto:megcummings@gmail.com" target="_blank" rel="noopener noreferrer" title="Email MegCummings@gmail.com" className="button btn" >Get In Contact</a></div>
            </div>    
            <p className="copyright">&copy;2019 Meg Cummings</p>
        </footer>
    )
}


export default Footer;