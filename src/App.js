import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Sobre from './Sobre';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Alexssandro Gottschalk</h1>
            <p>
              <Link to='/'>Home</Link> |&nbsp;
              <Link to='/sobre'>Sobre</Link>
            </p>
          </header>
          <p className="App-intro">
            <Route path='/sobre' component={Sobre} />
            <Route path='/' exact component={Home} />
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
