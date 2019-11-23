import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import Start from './Start';
import End from './End';

import Page1 from './Pages/Page1'
import Page10 from './Pages/Page10'
import Page11 from './Pages/Page11'
import Page12 from './Pages/Page12'
import Page13 from './Pages/Page13'
import Page14 from './Pages/Page14'
import Page16 from './Pages/Page16'
import Page17 from './Pages/Page17'
import Page18 from './Pages/Page18'
import Page15 from './Pages/Page15'

import Page2 from './Pages/Page2'
import Page21 from './Pages/Page21'
import Page22 from './Pages/Page22'
import Page23 from './Pages/Page23'
import Page24 from './Pages/Page24'
import Page25 from './Pages/Page25'
import Page26 from './Pages/Page26'
import Page27 from './Pages/Page27'

import Page28 from './Pages/Page28'
import Page29 from './Pages/Page29'

import Page4 from './Pages/Page4'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Page3 from './Pages/Page3';
import Page5 from './Pages/Page5'
import Page8 from './Pages/Page8'
import Page6 from './Pages/Page6'
import Page9 from './Pages/Page9'
import Quiz from './Quiz';

const styles = {}



class Routes extends Component {


  render() {
    // const { classes } = this.props;
    return (
      <div>
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/end" component={End} />
          <Route exact path="/quiz" component={Quiz} />
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
          <Route exact path="/13" component={Page13} />
          <Route exact path="/14" component={Page14} />

          <Route exact path="/15" component={Page15} />

          <Route exact path="/16" component={Page16} />
          <Route exact path="/17" component={Page17} />
          <Route exact path="/18" component={Page18} />

          <Route exact path="/19" component={Page8} />
          <Route exact path="/20" component={Page18} />
          <Route exact path="/21" component={Page21} />

          <Route exact path="/22" component={Page22} />
          <Route exact path="/23" component={Page23} />
          <Route exact path="/24" component={Page24} />
          <Route exact path="/25" component={Page25} />
          <Route exact path="/26" component={Page26} />
          <Route exact path="/27" component={Page27} />

          <Route exact path="/28" component={Page28} />
          <Route exact path="/29" component={Page29} />

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



