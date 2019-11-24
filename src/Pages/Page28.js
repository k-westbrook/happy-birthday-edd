import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();



const Page27 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Rose "Flower" Bueller</Typography>
            <Typography className={classes.storyContent} variant='body1'>Pabi doesn't trust you Rose. Rose replies, "What?! JIMMY IS DEAD. These are not from him. These are from my ex, Ricardo. We have been seeing each other on the side. But that doesn't mean I killed him!" Well, what do you think? Seems like a dead end, {props.gameState.userName}. </Typography>

            <div className={classes.buttonGroup}>
              {(!props.gameState.visitedPages[25].visited) &&
                < Button className={classes.button} onClick={(value) => { handleGame(25) }}>{props.gameState.visitedPages[25].button}</Button>
              }
              {(!props.gameState.visitedPages[27].visited) &&
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(27) }}>{props.gameState.visitedPages[27].button}</Button>
              }
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(17) }}>{props.gameState.visitedPages[17].button}</Button>

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page27));
