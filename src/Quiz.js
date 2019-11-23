import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { visitPage } from './Store/Game'

const styles =
{

};


function Quiz(props) {

  const handleVisit = () => {
    props.handleVisit(30);
    props.history.push(`/1`)
  }
  return (
    <div >
      <fieldset>
        <legend>But first..who do you think the killer will be</legend>
        <h1>Happy Birthday Edd!</h1>

        <Link to='/start'>
          <button>YES</button>
        </Link>

      </fieldset>
    </div>
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

export default withStyles(styles)(connect(mapState, mapDispatch)(Quiz));

