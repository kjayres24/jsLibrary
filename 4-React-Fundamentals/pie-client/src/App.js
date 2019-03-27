import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Auth />
      </div>
    );
  }
}

export default App;
