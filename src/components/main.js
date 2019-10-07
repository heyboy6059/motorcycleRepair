import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mechanic from './mechanic';
import MechaniRegistration from './mechanicRegistration';
import Homepage from './homepage';
import Matching from './matching';
import Alert from './alert';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    {/* <Route path="/mechanic" component={Mechanic} /> */}
    <Route path="/mechanic" component={MechaniRegistration} />
    <Route path="/matching" component={Matching} />
    <Route path="/alert" component={Alert} />
  </Switch>
);

export default Main;
