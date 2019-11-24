import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';



const styles = styleFinder();


const Page9 = (props) => {
  const { classes } = props;
  const handleGame = (value) => {
    props.handleVisit(9);
    props.handleVisit(10);
    props.handleVisit(11);
    if (value === 12) {
      props.handleVisit(12);
    }
    props.handleVisit(value);
    props.history.push(`/${value}`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div className={classes.storyContainer} >
            <Typography className={classes.pageTitle} variant='h3'>Guy in Sunglasses</Typography>
            <Typography className={classes.storyContent} variant='body1'> Wow, we really push that guy in the sunglasses or George. If that is his real name... He said he works for a local coffee shop and works wiht Jimmy. What? Did you know that Jimmy was a pretentious coffee person? Apparently, he was stealing coffee roasting tricks from a small coffee shop in Phinney Ridge. Jimmy has been working there...I thought he was a corporate Starbucks barista and loved it. Maybe the Starbucks Roastery is mad about him leaving.He said that Jimmy had messaged him to meet tonight at 8 but Jimmy was already dead when he got there. He said he did smell a chocolate scent but saw no one else. </Typography>
            {(!props.gameState.visitedPages[10].visited) ?
              <div className={classes.buttonGroup}>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(10) }}>{props.gameState.visitedPages[10].button}</Button>
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(12) }}>{props.gameState.visitedPages[12].button}</Button>

              </div>
              :
              <div className={classes.buttonGroup}>
                {(!props.gameState.visitedPages[13].visited) &&
                  < Button variant='contained' className={classes.button} onClick={(value) => { handleGame(13) }}>{props.gameState.visitedPages[13].button}</Button>
                }
                {(!props.gameState.visitedPages[14].visited) &&
                  < Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
                }
                {(!props.gameState.visitedPages[25].visited) &&
                  < Button variant='contained' className={classes.button} onClick={(value) => { handleGame(25) }}>{props.gameState.visitedPages[25].button}</Button>
                }


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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page9));
