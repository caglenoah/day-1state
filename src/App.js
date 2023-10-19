import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoCard from './TodoCard';

//Complete class based component it has : state, constructor, render method, we are exporting and we are importing component


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: true,
      inputValue: "", 
      listOfTodos: []
    }
  }

  handleClick = () => {
    this.state.isClicked ?
      this.setState({ isClicked: false }) :
      this.setState({ isClicked: true })
  }
  
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ listOfTodos: [...this.state.listOfTodos, this.state.inputvalue] })
    this.setState({inputValue: ""})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>Click Me</button>
          <p>
            {this.state.isClicked ? "true" : "false"}
          </p>
          <a className="App-link" 
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.name}
          </a>
        </header>
      </div>
  )
}
}

export default App;