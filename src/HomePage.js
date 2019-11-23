import React from 'react';
import { Link } from 'react-router-dom'
import { styleFinder } from './StyleSheets/StyleFinderMain';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';


function HomePage(props) {
  const { classes } = props;
  return (
    <div className={classes.pageContainer}>
      <div className={classes.titleContainer}>
        <Typography variant='h1'>Happy Birthday Edd!</Typography>
      </div>
      <Paper className={classes.Paper}>
        <fieldset>
          <legend>Welcome to Edd's Party!</legend>

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
      </Paper>
    </div>
  );
}

export default withStyles(styleFinder())(HomePage);
