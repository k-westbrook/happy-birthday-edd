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

    props.history.push(`/end`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div className={classes.storyContainer} >
            <Typography className={classes.pageTitle} variant='h3'>YOU SOLVE IT ALL</Typography>
            <Typography className={classes.storyContent} variant='body1'> Edd starts stuttering and can't come up with where he was or where the chocolate is from.
            He then confesses that he killed that sop because he wrote him out of his coffee shop business plan. Edd couldn't take it and was eating chocolate while waiting for him, and then in the heat of the moment he stabbed Jimmy in the heart. Just like Jimmy had stabbed him in the back. </Typography>
            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={endGame}>YES!</Button>
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
