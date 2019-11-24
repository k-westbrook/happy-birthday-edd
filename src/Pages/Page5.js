import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';

const styles = styleFinder();


const Page5 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Abandoned Alley</Typography>
            <Typography className={classes.storyContent} variant='body1'> Pabi is running ahead... that cat is amazing. {props.gameState.userName} don't touch the body!!! Ok let's examine it: looks like he died from being stabbed in the heart. Pabi, What's that? Pabi says he was murdered. About 3 hours ago. So around 6 pm. Rustle, Rustle, there is a lookie loo but we could go look for others</Typography>
            <div className={classes.buttonGroup}>
              {props.gameState.visitedPages.slice(9, 12).map((button) => {

                if (!button.visited) {
                  return (<Button key={button.index} className={classes.button} onClick={(value) => { handleGame(button.index) }}>{button.button}</Button>
                  )
                } else {
                  return (<Button disabled key={button.index} className={classes.button} onClick={(value) => { handleGame(button.index) }}>{button.button}</Button>
                  )

                }
              })
              }
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page5));
