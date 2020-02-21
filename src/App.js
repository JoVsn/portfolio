import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.scss";

import { Header, Footer } from "./common/";
import ScrollTopButton from "./common/ScrollTopButton/ScrollTopButton";

const App = () => {
    
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
            <ScrollTopButton />
        </div>
    );
};

export default App;
