import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { sizing, border, borderColor } from '@material-ui/system';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';



const styles =
{
  pageContainer:
  {
    display: 'flex',
    flexDirection: "column"
  },
  nameForm:
  {

    width: '30vw'
  },
  formContainer:
  {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "5vh"
  },
  input:
  {
    width: '100%',
    fontSize: '100%',
    padding: '1vh',
    backgroundColor: 'white',
  },
  inputLabel:
  {
    fontSize: '100%',
    color: 'light-grey',
    backgroundColor: 'white',
  },
  button:
  {
    backgroundColor: 'white',
    width: "100%",
    marginTop: '2vh'
  }
}

const Start = (props) => {
  const { classes } = props;
  return (
    <div className={classes.pageContainer}>
      <div>
        <Typography variant='p'>Tonight was supposed to be fun--it was Edd's birthday party. It was supposed to be about Edd. <br />BUT Jimmy "Hook" Baggins made it about him.
      He's missing. I'm basically a detective. My name is Katie "Sherlock" Westbrook. This is my assistant. Yes, he's a cat but he's also a aspiring model. What is your name? </Typography>

      </div>
      <div className={classes.formContainer}>
        <form className={classes.nameForm} >
          <InputLabel className={classes.inputLabel} htmlFor="userName">Name</InputLabel>
          <Input className={classes.input} id="userName" name='userName' required placeholder="Enter Your Name"></Input>
          <Button className={classes.button}>Submit</Button>
        </form>

      </div>

    </div>
  );
}

export default withStyles(styles)(Start);
