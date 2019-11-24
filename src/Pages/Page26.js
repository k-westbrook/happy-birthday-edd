import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();



const Page26 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Harry at the Local Coffee Shop</Typography>
            <Typography className={classes.storyContent} variant='body1'>Don't worry {props.gameState.userName}, I'll play it real good. Let's not break the news. Hey, I'm Edd's and Jimmy's mutual friend! I didn't know they worked here! My friend,{props.gameState.userName}, Pabi and I are just getting a late night tea. Do you work with either of them? Harry says "Yes, I know them. They are always laughing and playing pranks together. I don't like Jimmy, I just saw him earlier today before he left. Ricardo got angry at him because he is shady. I think he is stealing from our boss Ricardo. Him and Edd were whispering about something. Not sure what. I'm actually surprised Edd was ok with the tie of employee of the month." </Typography>
            {(!props.gameState.visitedPages[25].visited) ?
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(25) }}>{props.gameState.visitedPages[25].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(27) }}>{props.gameState.visitedPages[27].button}</Button>

              </div>
              :
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(17) }}>{props.gameState.visitedPages[17].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(26) }}>{props.gameState.visitedPages[26].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page26));
