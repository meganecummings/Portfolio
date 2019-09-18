import React from 'react';

const Comment = () => {
    return(
        <div  id="comment" className="wrap">
            <h2>Get in Touch</h2>
            <form>
                <input type="text" placeholder="Name" className="col-half" />
                <input type="email" placeholder="Email" className="col-half" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default Comment;