import React from 'react';

import ProjectList from '../ProjectList/ProjectList';
import About from '../About/About';
import Inspirations from '../Inspirations/Inspirations';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return(
        <>
            <div className="grid-wrapper">
                <ProjectList />
                <aside>
                    <About />
                    <Inspirations />
                </aside>
            </div>
            <section className="comment">
                <Comment />
            </section>
            <Footer />
        </>
    )
}

export default HomePage;


