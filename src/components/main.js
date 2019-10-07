import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mechanic from './mechanic';
import Homepage from './homepage';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/mechanic" component={Mechanic} />
  </Switch>
)

export default Main;
