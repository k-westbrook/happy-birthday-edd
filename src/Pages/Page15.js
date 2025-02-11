import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';

const styles = styleFinder();


const Page15 = (props) => {
  const { classes } = props;
  const handleGame = (value) => {

    props.handleVisit(value);
    props.history.push(`/${value}`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div className={classes.storyContainer} >
            <Typography className={classes.pageTitle} variant='h3'>Edd</Typography>
            <Typography className={classes.storyContent} variant='body1'> We both refuse the shot and start getting mad. Like someone died. Someone he knew and his mood is erratic. What's up with him? Paula, a mutual friend comes over and tries to start talking to you. She is crying because Jimmy was her good friend. She says they had coffee recently one morning at their favorite cafe in Portland. Hmmm. What do you think? Pabi wants to keep on Edd. Paula offers us a beer. Edd offers us a pill. Hell no I'm not taking that pill but you can do whatever you want. </Typography>

            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(20) }}>{props.gameState.visitedPages[20].button}</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(21) }}>{props.gameState.visitedPages[21].button}</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(22) }}>{props.gameState.visitedPages[22].button}</Button>
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
    handleVisit: (pageNumber) => dispatch(visitPage(pageNumber))
  }
}

const mapState = state => {
  return {
    gameState: state.game

  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Page15));
