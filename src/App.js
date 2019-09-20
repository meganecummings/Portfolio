import React, { Component }from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

class App extends Component {
  
  changeRoute = () => {
    this.props.history.push('/comment');
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
