import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import {About, Home, Projects, Project} from './components';

const Container = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/project/:projectId" component={Project} />
      <Route component={Home} />
    </Switch>
  );
};

export default withRouter(Container);
