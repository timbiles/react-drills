import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.handleLogin = this.handleLogin.bind(this);

  }

  handleChange(val){
    this.setState({username: val})
  }

  handleChange2(val){
    this.setState({password: val})
  }

  handleLogin(){
    alert(`username: ${this.state.username} password: ${this.state.password}`);
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
        type='password'
        onChange={e=> this.handleChange2(e.target.value)}
        />
      <button
        onClick={this.handleLogin}
      >Login</button>
      </div>
    );
  }
}

export default App;
