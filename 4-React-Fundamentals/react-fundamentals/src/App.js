import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Site/Header'
import Footer from './Components/Site/Footer'
import Sidebar from './Components/Site/Sidebar'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Sidebar />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;