import React from 'react';

import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = () => {
    return(
        <>
            <div className="grid-wrapper" id="homepage">
                <About />
                <ProjectList />
            </div>
            <section className="comment">
                <Comment />
            </section>
            <Footer />
        </>
    )
}

export default HomePage;


