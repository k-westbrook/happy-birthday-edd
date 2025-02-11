import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';


const styles = styleFinder();


const Page29 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Iam Stabber</Typography>
            <Typography className={classes.storyContent} variant='body1'> Pabi leaves because, I don't know, this seems dangerous? But I guess let's have a chat with someone who killed over 100 people. Iam tells us all about how he is innocent. But all his victims were stabbed so maybe Iam is responsible. I just asked the bartender and he says Iam left for 2 hours around 5:30pm. Hmmm... Thanks for the drink man but I think we should keep looking</Typography>

            <div className={classes.buttonGroup}>
              {(!props.gameState.visitedPages[13].visited) &&
                < Button className={classes.button} onClick={(value) => { handleGame(13) }}>{props.gameState.visitedPages[13].button}</Button>
              }
              {(!props.gameState.visitedPages[14].visited) &&
                <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(14) }}>{props.gameState.visitedPages[14].button}</Button>
              }
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(17) }}>{props.gameState.visitedPages[17].button}</Button>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page29));
