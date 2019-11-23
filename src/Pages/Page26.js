import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'




const styles =
{
  pageContainer:
  {
    display: 'flex',
    flexDirection: "column",
    width: '100vw'
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
    width: "50%",
    marginTop: '2vh'
  },
  buttonGroup:
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}



const Page26 = (props) => {
  const { classes } = props;
  const handleGame = (value) => {

    props.handleVisit(value);
    props.history.push(`/${value}`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div>
            <Typography variant='h3'>Harry at the Local Coffee Shop</Typography>
            <Typography variant='body1'>Don't worry {props.gameState.userName}, I'll play it real good. Hey, I'm Edd's and Jimmy's mutual friend! I didn't know they worked here! My friend,{props.gameState.userName}, Pabi and I are just getting a late night tea. </Typography>
            {(!props.gameState.visitedPages[25].visited) ?
              <div className={classes.buttonGroup}>
                <Button className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
                <Button className={classes.button} onClick={(value) => { handleGame(26) }}>{props.gameState.visitedPages[26].button}</Button>
                <Button className={classes.button} onClick={(value) => { handleGame(27) }}>{props.gameState.visitedPages[27].button}</Button>

              </div>
              :
              <div className={classes.buttonGroup}>
                <Button className={classes.button} onClick={(value) => { handleGame(25) }}>{props.gameState.visitedPages[25].button}</Button>
                <Button className={classes.button} onClick={(value) => { handleGame(26) }}>{props.gameState.visitedPages[26].button}</Button>
                <Button className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>

              </div>
            }
          </div>
          :
          <div>
            <Typography variant='h3'>Page Loading...</Typography>
          </div>
      }
    </div >
  );
}



const mapDispatch = dispatch => {
  return {
    handleVisit: (pageNumber) => dispatch(visitPage(pageNumber))
  }
}

const mapState = state => {
  return {
    gameState: state.game

  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Page26));
