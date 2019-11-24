import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';

const styles = styleFinder();


const Page4 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Isolated Warehouse</Typography>
            <Typography className={classes.storyContent} variant='body1'> I'm not sure we are supposed to be here. Pabi says he thinks Jimmy likes to be outside a lot. So that might help.</Typography>
            <div className={classes.buttonGroup}>
              {props.gameState.visitedPages.slice(2, 5).map((button) => {

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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page4));
