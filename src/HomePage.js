import React from 'react';
import { Link } from 'react-router-dom'
import { styleFinder } from './StyleSheets/StyleFinderMain';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux'


function HomePage(props) {
  const { classes } = props;
  const handleYes = () => {
    props.history.push('/quiz')
  }

  return (
    <div className={classes.pageContainer}>
      <div className={classes.titleContainer}>
        <Typography className={classes.header} variant='h1'>Happy Birthday Edd!</Typography>
      </div>
      <div className={classes.paperContainer}>
        <Paper className={classes.Paper}>
          <fieldset className={classes.FieldSet}>
            <legend className={classes.text}><b>Welcome to Edd's Party!</b></legend>
            <div className={classes.textContainer}>
              <Typography variant='body1' className={classes.text}>I hope you have an great Happy Birthday! <br />Wait this is not just a birthday card...<br />I need your help.Will you?</Typography>
            </div>
            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={handleYes}>YES</Button>

              <Button className={classes.button} variant='contained' href='https://m.wikihow.com/Be-a-Good-Friend'>NO</Button>
            </div>
          </fieldset>

        </Paper>
      </div>

    </div>
  );
}


const mapState = state => {
  return {
    gameState: state.game

  }
}

export default withStyles(styleFinder())(connect(mapState)(HomePage));
