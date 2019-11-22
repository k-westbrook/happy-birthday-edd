import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { setUser } from './Store/Game'
import { connect } from 'react-redux'




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
  const handleSetUser = (evt) => {
    evt.preventDefault();
    props.handleSetUser(evt.target.userName.value)
  }
  return (
    <div className={classes.pageContainer}>
      <div>
        <Typography variant='body1'>Tonight was supposed to be fun--it was Edd's birthday party. It was supposed to be about Edd. <br />BUT Jimmy "Hook" Baggins made it about him.
      He's missing. I'm basically a detective. My name is Katie "Sherlock" Westbrook. This is my assistant. Yes, he's a cat but he's also a aspiring model. What is your name? </Typography>

      </div>
      <div className={classes.formContainer}>
        <form className={classes.nameForm} onSubmit={handleSetUser} >
          <InputLabel className={classes.inputLabel} htmlFor="userName">Name</InputLabel>
          <Input className={classes.input} id="userName" name='userName' required placeholder="Enter Your Name"></Input>
          <Button className={classes.button} type='submit'>Submit</Button>
        </form>

      </div>

    </div >
  );
}



const mapDispatch = dispatch => {
  return {
    handleSetUser: (userName) => dispatch(setUser(userName))
  }
}

const mapState = state => {
  return {
    userName: state.game.userName
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Start));
