import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'


function No() {
  const [age] = useState(20);
  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>Welcome, Edd is Old</legend>
          <h1>Happy Birthday Edd! He is {age}</h1>
          <Link to='/no'>
            <button>NO

          </button>
          </Link>
        </fieldset>

      </header>
    </div>
  );
}

export default No;
