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
        <Typography className={classes.header} variant='h1'>Happy Birthday Edd!</Typography>
      </div>
      <div className={classes.paperContainer}>
        <Paper className={classes.Paper}>
          <fieldset>
            <legend>Welcome to Edd's Party!</legend>
            <div className={classes.textContainer}>
              <Typography variant='body1'>I hope you have an great Happy Birthday! <br />Wait this is not just a birthday card...<br />I need your help.</Typography>
            </div>
            <Link to='/quiz'>
              <button>YES</button>
            </Link>
            <a href="https://m.wikihow.com/Be-a-Good-Friend">
              <button>NO</button>
            </a>
          </fieldset>
        </Paper>
      </div>
    </div>
  );
}

export default withStyles(styleFinder())(HomePage);
