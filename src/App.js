import React, { Component } from 'react';
import './App.css';
import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Movie from './components/home/Movie';
import { HashRouter as Router, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <TopNavbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
