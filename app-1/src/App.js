import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      textBox: ''
    };
  }

  handleChange(val){
    this.setState({textBox: val})
  }

  render(){
    return(
      <div className='App'>
        <input
          type='text'
          placeholder='Type in me!!'
          onChange={e =>this.handleChange(e.target.value)}
        />
        <p>{this.state.textBox}</p>
      </div>
    )
  }
}

export default App;