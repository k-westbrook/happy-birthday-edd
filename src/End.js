import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper } from '@material-ui/core';
import { endGameBad } from './Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from './StyleSheets/StyleFinderGeneric';




const styles = styleFinder();



const End = (props) => {
  const { classes } = props;
  const endGame = () => {
    props.endGame();
    props.history.push(`/quiz`)
  }
  return (

    < div className={classes.endPageContainer} >
      {
        props.gameState.userName ?
          <div className={classes.endContent}  >
            <Typography className={classes.endTitle} variant='h3'>THE END</Typography>
            <Paper className={classes.paperEnd}>
              <Typography variant='body1' className={classes.endText}> Congrats {props.gameState.userName}!!<br /><br />HAPPY BIRTHDAY EDD!<br /> YOU AREN'T A REAL KILLER <br />BUT YOU KILL PEOPLE WITH LAUGHTER</Typography>
              {(props.gameState.quizAnswer) &&
                <Typography variant='body1' className={classes.endText}> You thought {props.gameState.quizAnswer} was the killer!</Typography>
              }       {(props.gameState.quizAnswer === "Edd") ?
                <Typography variant='body1' className={classes.endText}> You are smart.</Typography>
                :
                <Typography variant='body1' className={classes.endText}> My, oh my, we have learned..</Typography>

              }
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.endButton} onClick={endGame}>GO BACK TO START</Button>
              </div>
            </Paper>

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
    endGame: () => dispatch(endGameBad())
  }
}


const mapState = state => {
  return {
    gameState: state.game

  }
}


export default withStyles(styles)(connect(mapState, mapDispatch)(End));
