import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { endGameBad } from '../Store/Game'
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



const Page12 = (props) => {
  const { classes } = props;
  const endGame = () => {
    props.endGame();
    props.history.push(`/quiz`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div>
            <Typography variant='h3'>THE END</Typography>
            <Typography variant='body1'> You can go back to the party {props.gameState.userName}.I'm doing real work and need to find the truth. ***you head back*** Katie and Pabi texted everyone that you bailed on the investigation and now no one wants to be your friend. Especially Edd. He gives you the worst look EVER.</Typography>
            <div className={classes.buttonGroup}>
              <Button className={classes.button} onClick={endGame}>GO BACK TO START</Button>
            </div>


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
    endGame: () => dispatch(endGameBad())
  }
}

const mapState = state => {
  return {
    gameState: state.game

  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Page12));
