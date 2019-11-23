import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Start from './Start';
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page4 from './Pages/Page4'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Page3 from './Pages/Page3';
import Page5 from './Pages/Page5'
import Page8 from './Pages/Page8'

const styles = {}



class Routes extends Component {


  render() {
    // const { classes } = this.props;
    return (
      <div>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/1" component={Page1} />
          <Route exact path="/2" component={Page2} />
          <Route exact path="/3" component={Page3} />
          <Route exact path="/4" component={Page4} />
          <Route exact path="/5" component={Page5} />
          <Route exact path="/7" component={Page8} />
          <Route exact path="/8" component={Page8} />
        </Switch>
      </div>
    )
  }
}
const mapState = state => {
  return {
    gameState: state.game

  }
}

export default withStyles(styles)(connect(mapState)(Routes));



