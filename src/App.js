import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Complete class based component it has : state, constructor, render method, we are exporting and we are importing component


class App extends Component {
  constructor() {
    super()

    this.state = {
      isClicked: true
    }
  }

  handleClick = () => {
    this.state.isClicked ?
      this.setState({ isClicked: false }) :
      this.setState({isClicked : true })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>Click Me</button>
          <p>
            {this.stateisClicked ? "true" : "false"}
          </p>
          <a className="App-link" 
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </header>
      </div>
  )
}
}

export default App;