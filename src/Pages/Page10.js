import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';

const styles = styleFinder();

const Page10 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Evidence at the Scene of the Crime</Typography>
            <Typography variant='body1' className={classes.storyContent} > LOOK! Pabi is the real MVP. He's by the dumpster and instagramming himself. But that's not cool, it's a crime scene, not a photo shoot. I swear. BUT LOOK. A bloody rag...the murderer didn't do well at hiding the evidence. Hmmm, under the rag is a bouquet of roses? They look fresh. Should we head to the local coffee shop? Though he also liked to eat at Dick's and drink at Fremont Brewery.</Typography>
            {(!props.gameState.visitedPages[9].visited) ?
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(9) }}>{props.gameState.visitedPages[9].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(12) }}>{props.gameState.visitedPages[12].button}</Button>

              </div>
              :
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(13) }}>{props.gameState.visitedPages[13].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(25) }}>{props.gameState.visitedPages[25].button}</Button>

              </div>
            }
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page10));
