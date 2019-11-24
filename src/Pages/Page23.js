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

    props.history.push(`/end`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div>
            <Typography className={classes.pageTitle} variant='h3'>YOU SOLVE IT ALL</Typography>
            <Typography className={classes.storyContent} variant='body1'> Edd starts stuttering and can't come up with where he was or where the chocolate is from
            He then confesses that he killed that sob because he wrote him out of his coffee shop business plan. Edd couldn't take it and waited from him by eating chocolate and then in the heat of the moment, he stabbed him in the heart like Jimmy stabbed him in the back. </Typography>
            <div className={classes.buttonGroup}>
              <Button className={classes.button} onClick={endGame}>YES!</Button>
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
