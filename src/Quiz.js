import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { visitPage, setQuizAnswer } from './Store/Game'
import { Typography, Button, ButtonBase } from '@material-ui/core';

const styles =
{
  radioGroup:
  {
    display: 'flex'
  },
  button:
  {
    backgroundColor: 'white',
    width: "50%",
    marginTop: '2vh'
  }
};


function Quiz(props) {
  const { classes } = props;
  const handleSubmit = (evt) => {
    props.setAnswer(evt.target.killer.value);
    props.handleVisit(30);
    props.handleVisit(1);

    props.history.push(`/1`)
  }
  return (
    <div >
      <fieldset>
        <legend>But first..who do you think the killer will be</legend>
        <h1>Select The Person Most Likely</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Pabi" />
            <Typography variant='body1'>Pabi the cat</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Katie" />
            <Typography variant='body1'>Katie</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="You" />
            <Typography variant='body1'>You are the Killer</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="George" />
            <Typography variant='body1'>Lookie Loo George at Crime Scene</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Youth" />
            <Typography variant='body1'>Youth Running away at Crime Scene</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Harry" />
            <Typography variant='body1'>Harry the coworker who hates him</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Rose" />
            <Typography variant='body1'>Rose the Girlfriend</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Edd" />
            <Typography variant='body1'>Edd</Typography>
          </div>

          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Ricardo" />
            <Typography variant='body1'>His Boss and Rose's Ex</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Elsa" />
            <Typography variant='body1'>Elsa</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Paula" />
            <Typography variant='body1'>Paula, a friend who offers you beer</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Iam" />
            <Typography variant='body1'>Iam Killer, alleged serial killer</Typography>
          </div>
          <div className={classes.radioGroup}>
            <input type="radio" name="killer" value="Frans" />
            <Typography variant='body1'>Frans,the ex co worker from Starbucks Roastery</Typography>
          </div>

          <Button className={classes.button} type='submit'>Let's get them</Button>

        </form >
      </fieldset>
    </div>
  );
}
const mapDispatch = dispatch => {
  return {
    handleVisit: (pageNumber) => dispatch(visitPage(pageNumber)),
    setAnswer: (answer) => dispatch(setQuizAnswer(answer))
  }
}

const mapState = state => {
  return {
    gameState: state.game

  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Quiz));

