import React from 'react';

import PostList from './PostList/PostList';
import About from '../About/About';
import Inspiration from './Inspiration/Inspiration';
import Comment from './Comment/Comment';
import Footer from './Footer/Footer';
import './Main.css';

const Main = () => {
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

export default Main;


