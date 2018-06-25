import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: [
        'Pulp Fiction',
        'The Grand Budapest Hotel',
        'Star Wars',
        'Harry Potter',
        'Dodgeball'
      ]
    }
  }

  render() {
    const movieList = this.state.movies.map( (e,i) => {
      return <h1 key={i}>{e}</h1>
    })

    return (
      <div className="App">
       <p>{movieList}</p>
      </div>
    );
  }
}

export default App;

