import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'


function HomePage() {

  return (
    <div >
      <fieldset>
        <legend>Welcome to Edd's Party!</legend>
        <h1>Happy Birthday Edd!</h1>
        <p>Wait this is not just a birthday card...I need your help.<br />
          Will you help?
          </p>
        <Link to='/quiz'>
          <button>YES</button>
        </Link>
        <a href="https://m.wikihow.com/Be-a-Good-Friend">
          <button>NO</button>
        </a>
      </fieldset>
    </div>
  );
}

export default HomePage;
