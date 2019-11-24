import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { setUser } from './Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from './StyleSheets/StyleFinderGeneric';


const styles = styleFinder();

const Start = (props) => {
  const { classes } = props;
  const handleSetUser = (evt) => {
    evt.preventDefault();
    props.handleSetUser(evt.target.userName.value);
    evt.target.userName.value = "";
    props.history.push('/1')
  }
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentContainer}>
        <div>
          <Typography className={classes.pageTitle} variant='h3' className={classes.title}>The Problem</Typography>
          <Typography variant='body1' className={classes.text}>Tonight was supposed to be fun--it was Edd's birthday party. It was supposed to be about Edd. <br />BUT Jimmy "Hook" Baggins made it about him. They work together at the Starbucks Roastery. Amazing Baristas. I could never.
      He's missing. I'm basically a detective. My name is Katie "Sherlock" Westbrook. This is my assistant, Pabi. Yes, he's a cat but he's also a aspiring model. What is your name? </Typography>

        </div>
        <div className={classes.formContainer}>
          <form className={classes.nameForm} onSubmit={handleSetUser} >
            <InputLabel className={classes.inputLabel} htmlFor="userName">Name</InputLabel>
            <Input className={classes.input} id="userName" name='userName' required placeholder="Enter Your Name"></Input>
            <Button variant='contained' className={classes.submitButton} type='submit'>Submit</Button>
          </form>

        </div>
      </div>
    </div >
  );
}



const mapDispatch = dispatch => {
  return {
    handleSetUser: (userName) => dispatch(setUser(userName))
  }
}



export default withStyles(styles)(connect(null, mapDispatch)(Start));
