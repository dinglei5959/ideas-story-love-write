import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';

import { Menus } from '@components';

import getRoutes from '@router';
import './styles/normalize.scss';
import './styles/initialize.scss';
import './styles/global.scss';

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class App extends Component {
  render() {
    return (
      <article className="root">

        <Menus></Menus>

        <Switch>
          {getRoutes().map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </article>
    );
  }
}

export default App;
