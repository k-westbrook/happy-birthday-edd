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



const Page9 = (props) => {
  const { classes } = props;
  const handleGame = (value) => {
    props.handleVisit(9);
    props.handleVisit(10);
    props.handleVisit(11);
    if (value === 12) {
      props.handleVisit(12);
    }
    props.history.push(`/${value}`)
  }


  return (

    < div className={classes.pageContainer} >
      {
        props.gameState.userName ?
          <div>
            <Typography variant='h3'>Guy in Sunglasses</Typography>
            <Typography variant='body1'> Wow, we really push that guy in the sunglasses or George. If that is his real name... He said he works for a competing barista. What? Did you know that Jimmy was a pretentious coffee person? Apparently, he was stealing coffee roasting tricks from a small coffee shop in Phinney Ridge. He said that Jimmy had messaged him to meet tonight at 8 but Jimmy was already dead when he got there. He said he did smell a chocolate scent but saw no one else </Typography>
            <div className={classes.buttonGroup}>
              <Button className={classes.button} onClick={(value) => { handleGame(10) }}>Let's look for clues</Button>
              <Button className={classes.button} onClick={(value) => { handleGame(12) }}>Let's go back to the party</Button>

            </div>


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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page9));
