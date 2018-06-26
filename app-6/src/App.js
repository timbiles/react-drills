import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  handleClick(){
    this.setState({
      list: [this.state.list, this.state.input],
      input: ''
    });
  }

  render() {
    const addedTodo = this.state.userInput.filter((e,i)=> {
      return <p key={i}>{e}</p>
    })
    return (
      <div className="App">
      <h1>My To-Do List</h1>
        <input
        type="text"
        placeholder="type into me"
        onChange={e=> this.handleChange(e.target.value)}
        />
        <button onClick={()=> this.handleClick()}>Add</button>
        <p>{addedTodo}</p>
      </div>
    );
  }
}

export default App;
