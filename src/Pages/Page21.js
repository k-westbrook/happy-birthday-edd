import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();



const Page15 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Beer Conversations</Typography>
            <Typography className={classes.storyContent} variant='body1'> You accept the beer and start laughing with the two of them. Edd makes some good jokes, not surprising. Ricardo, a friend from Edd's barista school comes over. He says that Jimmy works at his local coffee shop in Phinney Ridge. He is the big boss and has taken his knowledge of roasting to a next level. He says that he is suspicious of Jimmy but says "I don't have a problem with him except he is techically with an old friend of mine name Rose."  Pabi doesn't know Ricardo but he does know that Jimmy stole his girlfriend Rose.  </Typography>

            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(24) }}>Accuse Ricardo of Murder</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(19) }}>Leave because everyone is cool</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(22) }}>Keep on Edd</Button>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page15));
