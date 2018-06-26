import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      Presidents: [
        'George Washington',
        'Barrack Obama',
        'Theodore Rosevelt',
        'Abraham Lincoln',
        'John Adams',
        'John F. Kennedy'
      ]
    }
  }

  render(){
    const presList = this.state.Presidents.map((e,i) =>{
      return <h2 key={i}>{e}</h2>
    })
    return(
      <div className='App'>
      <h2>{presList}</h2>
      </div>
    )
  }


}


export default App;

