import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Start from './Start';
import Page1 from './Pages/Page1'
import Page10 from './Pages/Page10'
import Page11 from './Pages/Page11'
import Page12 from './Pages/Page12'
import Page16 from './Pages/Page16'
import Page17 from './Pages/Page17'
import Page2 from './Pages/Page2'
import Page4 from './Pages/Page4'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Page3 from './Pages/Page3';
import Page5 from './Pages/Page5'
import Page8 from './Pages/Page8'
import Page6 from './Pages/Page6'
import Page9 from './Pages/Page9'

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
          <Route exact path="/6" component={Page6} />
          <Route exact path="/7" component={Page8} />
          <Route exact path="/8" component={Page8} />
          <Route exact path="/9" component={Page9} />
          <Route exact path="/10" component={Page10} />
          <Route exact path="/11" component={Page11} />
          <Route exact path="/12" component={Page12} />


          <Route exact path="/16" component={Page16} />



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



