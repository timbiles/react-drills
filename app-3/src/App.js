import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      fruits: [
        'apple',
        'bananas',
        'kiwi',
        'strawberry',
        'mango',
        'watermelon'
      ],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  render(){
    const fruities = this.state.fruits.filter((e,i)=>{
      return e.includes(this.state.userInput)
    }).map((e,i) =>{
      return <h2 key={i} >{e}</h2>
    })

    return(
      <div className='App'>
        <input
          type='text'
          placeholder='Type something in me!'
          onChange={e=> this.handleChange(e.target.value)}
        />
        <h2>{fruities}</h2>     
      </div>
    )
  }

}

export default App;

