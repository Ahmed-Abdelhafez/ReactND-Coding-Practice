import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    query: ''
  }

  queryUpdate = (query) => {
    this.setState(() => ({
      query: query
    }))
  }

  render() {
    const { query } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
            type="text" 
            placeholder="Say Something"
            value={this.state.query}
            onChange={(event) => this.queryUpdate(event.target.value)} />
          <p className="echo">Echo:</p>
          {this.state.query !== '' && (
            <p>{this.state.query}</p>
          )}
          
        </div>
      </div>
    );
  }
}

export default App;
