import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'

class Routes extends Component {


  render() {
    const { classes } = this.props;
    return (
      <div>

        <Switch >
          <Route exact path="/" component={HomePage} />

        </Switch>


      </div>
    )
  }
}

export default Routes;
