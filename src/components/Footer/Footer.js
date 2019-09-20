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
                <form action="https://formspree.io/megcummings@gmail.com" method="POST"   >
                    <input type="text" name="email" placeholder="Email Address" />
                    <button type="submit">Keep in Touch</button>
                </form>
            </div>
            <p className="copyright">&copy;2019 Meg Cummings</p>
        </footer>
    )
}


export default Footer;