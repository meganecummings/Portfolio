import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// Internal Components
import Header from '../components/Landing/Header/Header';
import About from '../components/About/About';
import Comment from '../components/Comment/Comment';

const Routes = ({ history }) => {

    return (
        <Switch>
            <Route exact path='/' component={ Header } />
            <Route path="/about" render={(props) => 
                <About {...props} {...history} />} />
            <Route path="/comment" render={(props) => 
                <Comment {...props} {...history} />} />
            <Route path='*' render={() => <section><h2>Not Found</h2></section>} />
        </Switch>
    )
};    

export default withRouter(Routes);