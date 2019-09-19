import React from 'react';

import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Inspirations from '../Inspirations/Inspirations';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';
import Quotes from '../Quotes/Quotes.js';

const HomePage = ({ changeRoute }) => {
    return(
        <>
            <div className="grid-wrapper">
                <ProjectList />
                <aside>
                    <Quotes changeRoute={changeRoute}/>
                </aside>
                <About />
                <Inspirations />

            </div>
            <section className="comment">
                <Comment />
            </section>
            <Footer />
        </>
    )
}

export default HomePage;


