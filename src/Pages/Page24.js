import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { endGameBad } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();



const Page8 = (props) => {
  const { classes } = props;
  const endGame = () => {

    props.history.push(`/quiz`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div className={classes.storyContainer} >
            <Typography className={classes.pageTitle} variant='h3'>THE END</Typography>
            <Typography className={classes.storyContent} variant='body1'> Well it backfires. I tried to warn you as a Lifetime movie watcher. You are basically living like you are on Lifetime and now you're getting framed. Edd accuses you because you are waving your finger like you own his party. He runs to his room and calls the police. Paula ties your hands behind your back because she's bitter about you rejecting her beer. Police show and and recognize you from the crime scene. Your story doesn't hold up and you get booked. I come visit you in jail and show you pictures of Pabi. I WILL GET THE MURDERER I PROMISE.</Typography>
            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={endGame}>GO BACK TO START</Button>
            </div>


          </div>
          :
          <div>
            <Typography className={classes.pageTitle} variant='h3'>Page Loading...</Typography>
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
