import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Request from '../pages/Request';
import VerifyCode from '../pages/VerifyCode';
import Login from '../pages/Login';
import Preferences from '../pages/Preferences';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Request} />
        <Route path="/verify-code" component={VerifyCode} />
        <Route path="/login" component={Login} />

        <Route path="/dashboard" isPrivate component={Preferences} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
