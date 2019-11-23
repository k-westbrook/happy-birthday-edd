import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { styleFinder } from './StyleSheets/StyleFinderMain';
import { withStyles } from '@material-ui/core/styles';


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

export default withStyles(styleFinder())(HomePage);
