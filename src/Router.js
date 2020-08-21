import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Home, Project } from "./components";

import { TransitionHolder } from "./common/";
import { handleInitialData } from "./actions/shared";

const Router = ({ dispatch, loading }) => {
    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    if (loading || loading === null) return <TransitionHolder />;

    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/project/:projectId" component={Project} />
            <Route component={Home} />
        </Switch>
    );
};

const mapStateToProps = ({ loading }) => ({
    loading,
});

export default connect(mapStateToProps)(Router);
