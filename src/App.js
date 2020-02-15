import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.scss";

import { Header, Footer, TransitionHolder } from "./common/";
import { handleInitialData } from "./actions/shared";

const App = ({ dispatch, loading }) => {
    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    if (loading) return <TransitionHolder />;

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

const mapStateToProps = ({ loading }) => ({
    loading
});

export default connect(mapStateToProps)(App);
