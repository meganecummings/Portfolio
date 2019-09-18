import React from 'react';

import PostList from '../ProjectList/ProjectList';
import About from '../About/About';
import Inspiration from '../Inspiration/Inspiration';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = () => {
    return(
        <>
            <div className="grid-wrapper">
                <PostList />
                <aside>
                    <About />
                    <Inspiration />
                </aside>
            </div>
            <section class="comment">
                <Comment />
            </section>
            <Footer />
        </>
    )
}

export default HomePage;


