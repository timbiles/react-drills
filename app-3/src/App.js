import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      userInput: '',
      movies: [
        'Pulp Fiction',
        'The Grand Budapest Hotel',
        'Dodgeball',
        'Star Wars',
        'Harry Potter'
      ]
    }

  }
      handleChange(val) {
        this.setState({userInput: val})

  }
  render() {
    const movieList = this.state.movies.filter( (e,i) => {
      return e.includes(this.state.userInput)
    }).map( (e,i) => {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <div className="App">
        <input placeholder='Type a movie here!!' type='text' onChange={ e => this.handleChange(e.target.value)}/>
        {movieList}
      </div>
    );
  }
}

export default App;
