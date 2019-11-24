import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();



const Page16 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Interrogate the Youth</Typography>
            <Typography className={classes.storyContent} variant='body1'> The youth tells us that they are a straight A kid and like to go on brisk PNW walks at night. I guess they are warm blooded because ice cream in November? They said they saw two men arguing?! They say the guy who is dead screamed some name Zed or Ted maybe? But he was eating chocolate. Hmmm So guess we are narrowing it down. </Typography>

            <div className={classes.buttonGroup}>
              <Button className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
              <Button className={classes.button} onClick={(value) => { handleGame(17) }}>{props.gameState.visitedPages[17].button}</Button>

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page16));
