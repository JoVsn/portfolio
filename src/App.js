import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.scss";

import { Header, Footer, TransitionHolder } from "./common/";
import { handleInitialData } from "./actions/shared";

const App = ({ dispatch }) => {
    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    return (
        <div className="App">
            <TransitionHolder />
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default connect()(App);
