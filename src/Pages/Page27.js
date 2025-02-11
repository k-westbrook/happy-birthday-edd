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
            <Typography className={classes.pageTitle} variant='h3'>Starbucks Roastery</Typography>
            <Typography className={classes.storyContent} variant='body1'>We enter the roastery and randomly see a bunch of people who used to hang out with Jimmy all the time. I wave at them and one of them comes over and pets Pabi, his name is Frans. While they are petting him, Frans says, "Jimmy hasn't worked here in over a year. I think his plan was to work a local shop so he could start his own one day. I heard he was stealing local roastery secrets. Have you talked to his co-worker Harry? Harry is my roommate and HATES him. Well, I gotta close up." </Typography>

            <div className={classes.buttonGroup}>
              {(!props.gameState.visitedPages[13].visited) &&
                < Button className={classes.button} onClick={(value) => { handleGame(13) }}>{props.gameState.visitedPages[13].button}</Button>
              }
              {(!props.gameState.visitedPages[14].visited) &&
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
              }
              {(!props.gameState.visitedPages[17].visited) &&
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(17) }}>{props.gameState.visitedPages[17].button}</Button>
              }
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(19) }}>Go down the dark alley</Button>

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
