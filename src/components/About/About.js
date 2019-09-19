import React from 'react';
import megPhoto from './meg-headshot.jpg'
import './About.css';


const About = () => {
    return(
        <>
            <div id="about" className="col-third">
                <img src={megPhoto} alt="Meg's sweet face"></img>
            </div>
            <div id="about" className="col-half">
                <h3>About Meg</h3>
                <p>When not awkwardly standing in front of brick walls, I enjoy cooking and eating food, learning new ways to do new things and programming intuitive, thoughtful applications for others.  </p>
                <h4>Programming Passions</h4>
                <p>My first love was JavaScript. Moving the thing! Making the click bring text and images to life, telling a story with action. It was all computer magic to me, and I was hooked. After JavaScript, I learned so many other languages that helped increase the power and efficacy of my applications. I fell in love with Backend Development, architecting the foundations of my applications with precision, developing and implementing thorough testing, it was all part of the beauty and complexity of Software and I've been hooked ever since. </p>
            </div>
        </>
    )
}

export default About;