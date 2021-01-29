import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

export default () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
    </Switch>
  );
};