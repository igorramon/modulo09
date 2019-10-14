import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Dashboard from '../page/Dashboard';
import Signin from '../page/Signin';
import SignUp from '../page/SignUp';
import Profile from '../page/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
