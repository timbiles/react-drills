import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image myImage={'https://uniquehunters.com/wp-content/uploads/2015/08/Bird-Dog-Mashups-24-1024x856.jpg'} />
      </div>
    );
  }
}

export default App;

