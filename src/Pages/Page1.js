import React from 'react';
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux';

const styles = styleFinder();


const Page1 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3' >Let's Go!</Typography>
            <Typography className={classes.storyContent} variant='body1'>Hello {props.gameState.userName}, I'm glad you are on board to finding Jimmy. So Pabi found out that Jimmy likes to hang around three places: the first Starbucks (in the market), an abandoned alley, and an isolated warehouse in Ballard. Where should we go first?  </Typography>
            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(2) }}>Starbucks</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(3) }}>Abandoned Alley</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(4) }}>Isolated Warehouse</Button>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page1));
