import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.counter}</h1>
          <Counter counter={this.state.counter} />
        </header>
        <p className="App-intro">
          Oi Alex!!<br />To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
