import React from 'react';
import Routes from './Routes.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { styleFinder } from './StyleSheets/StyleFinderApp';

const styles = styleFinder();
function App(props) {
  const { classes } = props;
  return (
    <div className={classes.AppBackground}>
      <div className={classes.MainApp}>
        <Router>
          <Routes />
        </Router>
      </div>

    </div>
  );
}

export default withStyles(styles)(App);
