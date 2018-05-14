import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import indexRoutes from './routes/index.js';


class Routes extends Component {

  render() {
    return (
      <Router>
        <Switch>
          {
            indexRoutes.map((route) => {
              return (
                <Route
                  exact path={route.path}
                  key={route.id}
                  component={route.component}
                />
              );
            })
          }
        </Switch>
      </Router>
    );
  }
}

export default Routes;
