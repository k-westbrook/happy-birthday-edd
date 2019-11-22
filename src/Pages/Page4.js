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
          <div>
            <Typography variant='h3'>Isolated Warehouse</Typography>
            <Typography variant='body1'> I'm not sure we are supposed to be here. Pabi says he thinks Jimmy likes to be outside a lot. So that might help.</Typography>
            <div className={classes.buttonGroup}>
              <Button className={classes.button} onClick={(value) => { handleGame(2) }}>Starbucks</Button>
              <Button className={classes.button} onClick={(value) => { handleGame(3) }}>Abandoned Alley</Button>
              <Button className={classes.button} onClick={(value) => { handleGame(4) }}>Isolated Warehouse</Button>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Page4));
