import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './signin';
import Locator from './locator';
import Homepage from './homepage';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/signin" component={Signin} />
    <Route path="/locator" component={Locator} />
  </Switch>
)

export default Main;
