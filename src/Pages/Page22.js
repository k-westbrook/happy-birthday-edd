import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'
import { styleFinder } from '../StyleSheets/StyleFinderGeneric';




const styles = styleFinder();


const Page22 = (props) => {
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
            <Typography className={classes.pageTitle} variant='h3'>Let's push him</Typography>
            <Typography className={classes.storyContent} variant='body1'> Hell no. I'm not taking beer or pills. The only thing I'll take is you to police because you're guilty of having a birthday and being awesome. You laugh it off but start suspecting that Edd is guilty of something. Edd tells me that he just wants us to have fun. I believe him. Pabi is not sure but Pabi also licks his butt and takes instagram selfies at crime scenes.  </Typography>

            <div className={classes.buttonGroup}>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(19) }}>{props.gameState.visitedPages[19].button}</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(23) }}>{props.gameState.visitedPages[23].button}</Button>
              <Button variant='contained' className={classes.button} onClick={(value) => { handleGame(24) }}>Accuse Edd of Murder</Button>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page22));
