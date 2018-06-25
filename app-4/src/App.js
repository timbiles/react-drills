import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }


  }

  handleChange(val){
    this.setState({username: val})
  }

  handleChange2(val){
    this.setState({password: val})
  }

  render() {
    return (
      <div className="App">
      <input
        placeholder='Username'
        type='text'
        onChange={e=> this.handleChange(e.target.value)}
        />
      <input
        placeholder='Password'
        type='text'
        onChange2={e=> this.handleChange(e.target.value)}
        />
      <button>Login</button>
      </div>
    );
  }
}

export default App;
