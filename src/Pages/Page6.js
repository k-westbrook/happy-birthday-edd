import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';


const styles = styleFinder();


const Page6 = (props) => {
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
            <Typography className={classes.storyContent} variant='body1'> Ok you call 911, {props.gameState.userName}. ***2 hours later*** Head Detective Brooks "Orca" Diamond just told me that it looks like he lost a lot of blood from getting stabbed in the chest. Looks like 5 hours ago. Hey {props.gameState.userName}, looks there is some guy in a hat and sunglasses looking at weird. Who wears sunglasses to a crime scene at night?</Typography>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page6));
