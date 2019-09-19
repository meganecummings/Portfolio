import React from 'react';
import './Comment.css';

const Comment = () => {
    return(
        <div  id="comment" className="wrap">
            <h2>Get in Touch</h2>
            <form className="contact" action="https://formspree.io/megcummings@gmail.com" method="POST"   >
                <input type="text" placeholder="Name" className="col-half" />
                <input type="email" placeholder="Email" className="col-half" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default Comment;