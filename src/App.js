import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount(){
    // fetch data with promises
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  componentDidMount(){
    const response = async () => {
      const request = await fetch('https://swapi.co/api/people/')   
      const json = await request.json()
      console.log(json);
    } 
    response()
  }
  render() {
    return (
      <div className="App">
        <h1>async await and promises</h1>
      </div>
    );
  }
}

export default App;
