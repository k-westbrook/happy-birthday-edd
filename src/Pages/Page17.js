import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();


const Page17 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Edd's Birthday Party</Typography>
            <Typography className={classes.storyContent} variant='body1'> We return to Edd's Bday. Wow Edd looks happy and he is eating chocolate. He surprised Elsa with a rose. What a standup guy. We discuss the case with everyone but since we didn't really do anything else besides chase some random person we know nothing. This was a pretty sad case. We talk about all the evidence and Edd suddenly gets visibly bothered. Hmmmm. He returns with a plastic bottle of vodka and offers you a shot. </Typography>

            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(18) }}>{props.gameState.visitedPages[18].button}</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(15) }}>{props.gameState.visitedPages[15].button}</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(19) }}>{props.gameState.visitedPages[19].button}</Button>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page17));
