import React from 'react';
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

      </header>
    </div>
  );
}

export default App;
