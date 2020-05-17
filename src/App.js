import React, { Component } from 'react';
import './App.css';
import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar></TopNavbar>
        <Loader></Loader>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
