import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';

const styles = styleFinder();


const Page14 = (props) => {
  const { classes } = props;
  const handleGame = (value) => {

    props.handleVisit(value);
    props.history.push(`/${value}`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div>
            <Typography className={classes.pageTitle} variant='h3'>Dick's Burger</Typography>
            <Typography className={classes.storyContent} variant='body1'>Ok No one is here. Pabi will get probably get Fries and a Coke. But wait, is that the same bushel of roses we saw at the crime scene? I think that's Rose, isn't she dating Jimmy? Why does she have those roses? HMMMMM  </Typography>

            <div className={classes.buttonGroup}>
              {(!props.gameState.visitedPages[25].visited) &&
                < Button className={classes.button} onClick={(value) => { handleGame(25) }}>{props.gameState.visitedPages[25].button}</Button>
              }
              {(!props.gameState.visitedPages[27].visited) &&
                <Button className={classes.button} onClick={(value) => { handleGame(27) }}>{props.gameState.visitedPages[27].button}</Button>
              }
              <Button className={classes.button} onClick={(value) => { handleGame(28) }}>{props.gameState.visitedPages[28].button}</Button>

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page14));
