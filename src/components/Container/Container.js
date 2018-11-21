import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../Home/Home';
import About from '../About/About';
import Project from '../Project/Project';
import NotFound from '../NotFound/NotFound';

const Container = (location) => {
    return (
        <>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={'fade'}>
                    <Switch /* location={location} */>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/project/:projectId" component={Project} />
                        <Route component={NotFound} />
                    </Switch>
                    </CSSTransition>
            </TransitionGroup>

        </>
    );

}

export default withRouter(Container);