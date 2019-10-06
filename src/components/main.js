import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Match from './match';
import Mechanic from './mechanic';
import Homepage from './homepage';
import Motorcycle from './motorcycle';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/match" component={Match} />
    <Route path="/mechanic" component={Mechanic} />
    <Route path="/motorcycle" component={Motorcycle} />
  </Switch>
)

export default Main;
