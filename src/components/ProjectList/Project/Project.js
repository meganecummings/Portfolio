import React from 'react';

import Items from './CSwap-Items.png'
import Profile from './CSwap-Profile.png';

const Project = () => {
    return(
        <article>
            <h3>September 2019</h3>

            <h2>Clothing Swap </h2>
            
            <img src={Profile} alt="Clothing Swap App" />
            <p>My latest project, ClothingSwap is a fully functional CRUD application for creating and managing your own Clothing Swap Events! </p>
            <img src={Items} alt="Items Image" />
            <p>In the app, as shown above, you can add new Items, include those items in your events, and share/invite others via Email to attend your events!</p>
        </article>
    );
};

export default Project;