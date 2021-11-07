import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

import { Header, Footer } from "./common/";
import ScrollTopButton from "./common/ScrollTopButton/ScrollTopButton";

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    });
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
