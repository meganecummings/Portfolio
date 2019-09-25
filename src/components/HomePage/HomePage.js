import React from 'react';

import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = () => {
    return(
        <>
            <div className="grid-wrapper" id="homepage">
                <section>
                    <About />
                    <Technologies />
                    <ProjectList />
                </section>
            </div>
            <section id="comment">
                <Comment />
            </section>
            <Footer />
        </>
    )
}

export default HomePage;


