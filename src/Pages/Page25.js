import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();

const Page25 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Fremont Brewery</Typography>
            <Typography className={classes.storyContent} variant='body1'> Ya again. There's no lead at this place. But that guy over there is Iam Stabber, he was convicted of serial killing but got off on a technicality. His victims were stabbed. Look he just over us this drink... so many decisions </Typography>

            <div className={classes.buttonGroup}>
              {(!props.gameState.visitedPages[13].visited) &&
                < Button className={classes.button} onClick={(value) => { handleGame(13) }}>{props.gameState.visitedPages[13].button}</Button>
              }
              {(!props.gameState.visitedPages[14].visited) &&
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
              }

              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(29) }}>{props.gameState.visitedPages[29].button}</Button>

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page25));
