import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import No from './No';

class Routes extends Component {


  render() {
    const { classes } = this.props;
    return (
      <div>

        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/no" component={No} />

        </Switch>


      </div>
    )
  }
}

export default Routes;
