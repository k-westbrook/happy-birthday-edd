import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';


const styles = styleFinder();



const Page11 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Far down the Alley</Typography>
            <Typography variant='body1' className={classes.storyContent} > LOOK! It's a random teen. They are eating Molly Moon's and I know 1+1 =death. What do you think {props.gameState.userName}? Ok they are running let's run after them!!! </Typography>
            {(props.gameState.visitedPages[5].visited) ?
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(5) }}>Head Back to Crime Scene</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(16) }}>{props.gameState.visitedPages[16].button}</Button>

              </div>
              :
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(6) }}>Head Back to Crime Scene</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(16) }}>{props.gameState.visitedPages[16].button}</Button>

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page11));
