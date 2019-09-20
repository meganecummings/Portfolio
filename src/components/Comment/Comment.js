import React from 'react';
import './Comment.css';

const Comment = () => {
    return(
        <div id="contact" className="wrap">
            <h2 class="contact-heading">Say hi!</h2>
            <form className="contact" action="https://formspree.io/megcummings@gmail.com" method="POST"   >
                <input type="text" name="name" placeholder="Name" className="half input" />
                <input type="email" name="email" placeholder="Email" className="half input" />
                <textarea name="comment" id="" cols="30" rows="10" placeholder="Comment" className="textarea"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default Comment;