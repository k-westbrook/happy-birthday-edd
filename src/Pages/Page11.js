import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography, InputLabel, Input, Button } from '@material-ui/core';
import { visitPage } from '../Store/Game'
import { connect } from 'react-redux'




const styles =
{
  pageContainer:
  {
    display: 'flex',
    flexDirection: "column",
    width: '100vw'
  },
  nameForm:
  {

    width: '30vw'
  },
  formContainer:
  {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "5vh"
  },
  input:
  {
    width: '100%',
    fontSize: '100%',
    padding: '1vh',
    backgroundColor: 'white',
  },
  inputLabel:
  {
    fontSize: '100%',
    color: 'light-grey',
    backgroundColor: 'white',
  },
  button:
  {
    backgroundColor: 'white',
    width: "50%",
    marginTop: '2vh'
  },
  buttonGroup:
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}



const Page11 = (props) => {
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
            <Typography variant='h3'>Evidence at the scene of the crime</Typography>
            <Typography variant='body1'> LOOK! Pabi is the real MVP. He's by the dumpster and instagramming himself. But that's not cool, it's a crime scene, not a photo shoot. I swear. BUT LOOK. A bloody rag...the murderer didn't do well at hiding the evidence. Hmmm, under the rag is a bushel of roses? They look fresh.</Typography>
            {(!props.gameState.visitedPages[9].visited) ?
              <div className={classes.buttonGroup}>
                <Button className={classes.button} onClick={(value) => { handleGame(9) }}>{props.gameState.visitedPages[9].button}</Button>
                <Button className={classes.button} onClick={(value) => { handleGame(12) }}>{props.gameState.visitedPages[12].button}</Button>

              </div>
              :
              <div className={classes.buttonGroup}>
                {props.gameState.visitedPages.slice(13, 16).map((button) => {

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
            }
          </div>
          :
          <div>
            <Typography variant='h3'>Page Loading...</Typography>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page11));
