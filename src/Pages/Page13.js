import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';

const styles = styleFinder();

const Page13 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Local Coffee Shop</Typography>
            <Typography className={classes.storyContent} variant='body1'>Entering the local coffee shop, you notice a poster that has Edd and Jimmy's photos. It's an employee of the month poster! They tied this month! But, it looks like Edd usually gets it from the previous months. I didn't even know Edd worked here! I knew Jimmy was in our friend group but I thought they worked at the Starbucks Roastery! HMMMMM</Typography>
            {<div className={classes.buttonGroup}>
              {(!props.gameState.visitedPages[25].visited) &&
                < Button className={classes.button} onClick={(value) => { handleGame(25) }}>{props.gameState.visitedPages[25].button}</Button>
              }
              {(!props.gameState.visitedPages[14].visited) &&
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
              }
              {(!props.gameState.visitedPages[14].visited) &&
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(27) }}>{props.gameState.visitedPages[27].button}</Button>
              }
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(17) }}>{props.gameState.visitedPages[17].button}</Button>

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page13));
