import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Project } from "./components";

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/project/:projectId" component={Project} />
            <Route component={Home} />
        </Switch>
    );
};

export default Router;
