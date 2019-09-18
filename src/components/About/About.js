import React from 'react';
import megPhoto from './meg-headshot.jpg'

const About = () => {
    return(
        <div id="about">
			<h3>About Meg</h3>
			<p>When not awkwardly standing in front of brick walls, Meg enjoys cooking and eating food, learning new ways to do new things and learning new programming tricks.</p>
			<p>Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.</p>
			<img src={megPhoto} alt="Meg's sweet face"></img>
        </div>
    )
}

export default About;