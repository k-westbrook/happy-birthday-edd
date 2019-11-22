import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'


function HomePage() {
  const [age, addYear] = useState(31);

  return (
    <div className="App">
      <header className="App-header">
        <fieldset>
          <legend>Welcome, Edd is Old</legend>
          <h1>Happy Birthday Edd! He is {age}</h1>
          <button onClick={() => addYear(age + 1)}>CLICK</button>

        </fieldset>

      </header>
    </div>
  );
}

export default HomePage;
