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



const Page8 = (props) => {
  const { classes } = props;
  const endGame = () => {

    props.history.push(`/quiz`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div>
            <Typography variant='h3'>THE END</Typography>
            <Typography variant='body1'> Well it backfires, I told you as a Lifetime watcher. You are basically living your life like you are on Lifetime and getting framed. And that is what happens. Edd accuses you because you are waving your finger like you own his party. He runs to his room and calls the police. Paula ties your hands behind your back because she's bitter about you rejecting her beer. Police show and and recognize you from the crime scene. Your story doesn't hold up and you get booked. I come visit you in jail and show you pictures of Pablo. I WILL GET THE MURDERER I PROMISE.</Typography>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page8));
