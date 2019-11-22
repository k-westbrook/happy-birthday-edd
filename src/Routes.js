import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Start from './Start';
import Page1 from './Pages/Page1'


class Routes extends Component {


  render() {
    // const { classes } = this.props;
    return (
      <div>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/1" component={Page1} />

        </Switch>
      </div>
    )
  }
}

export default Routes;
