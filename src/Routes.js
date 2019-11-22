import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Start from './Start';

class Routes extends Component {


  render() {
    // const { classes } = this.props;
    return (
      <div>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/start" component={Start} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
