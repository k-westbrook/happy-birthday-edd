import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { endGameBad } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();



const Page18 = (props) => {
  const { classes } = props;
  const endGame = () => {
    props.endGame();
    props.history.push(`/quiz`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div className={classes.storyContainer} >
            <Typography className={classes.pageTitle} variant='h3'>THE END</Typography>
            <Typography className={classes.storyContent} variant='body1'> You wake up in a hospital bed and find out that you have been in a coma for a year. The killer was never caught. I'm there to tell you that I gave up after your sickness. I felt like we were too close but yet so far away.</Typography>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page18));
