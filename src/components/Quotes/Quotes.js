import React from 'react';
import './Quotes.css';

const Quotes = ({ changeRoute }) => {
    return(
        <>
            <div className="shapes" onClick={changeRoute}></div>
        </>
    )
}

export default Quotes;