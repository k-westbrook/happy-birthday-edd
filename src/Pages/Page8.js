import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { endGameBad } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';


const styles = styleFinder();
const Page8 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>THE END</Typography>
            <Typography className={classes.storyContent} variant='body1'> It is cold and dark. You never see it coming. The murderer murdered you.</Typography>
            <div className={classes.buttonGroup}>
              <Button className={classes.button} onClick={endGame}>GO BACK TO START</Button>
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
