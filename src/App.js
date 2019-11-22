import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes />
        </Router>
        <fieldset>
          <legend>Welcome, Edd is Old</legend>
          <h1>Happy Birthday Edd!</h1>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
