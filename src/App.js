import React, { Component }from 'react';
import NavBar from './components/NavBar/NavBar';
import Routes from './config/routes';
import Header from './components/Landing/Header/Header';
import HomePage from './components/HomePage/HomePage';
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
        {/* <Routes changeRoute={this.changeRoute} /> */}
      </div>
    );
  }
}

export default App;
