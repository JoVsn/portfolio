import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import {About, Home, Project, NotFound} from './components';

const Container = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/project/:projectId" component={Project} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(Container);
