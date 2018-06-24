import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, subscribeToRandomData } from "./api";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      timestamp: 'no timestamp yet',
      data: []
    };

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
    subscribeToRandomData(randomDataPoint => {
      const data = [...this.state.data, randomDataPoint];
      this.setState({
        data
      })
    });
  }


  render() {
    return (
      <div className="App">
        <p className="App-Intro">
          This is a timer value: {this.state.timestamp}
        </p>
        <p className="App-Intro">
          The array: {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
