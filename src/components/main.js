import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Match from './match';
import Mechanic from './mechanic';
import Homepage from './homepage';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/match" component={Match} />
    <Route path="/mechanic" component={Mechanic} />
  </Switch>
)

export default Main;
