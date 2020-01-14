import React from "react";
import { connect } from "react-redux";

import "./Home.scss";

import Main from "./Main/Main";
import { ContactBar } from "../../common";

import useTransition from "../../hooks/useTransition";

const Home = () => {
    return (
        <div className="Home">
            <Main />
            <ContactBar />
        </div>
    );
};

const mapStateToProps = ({ loading, project }) => ({
    loading,
    project
});

export default connect(mapStateToProps)(Home);
