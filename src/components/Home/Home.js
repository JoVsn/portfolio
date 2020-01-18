import React from "react";
import { connect } from "react-redux";

import "./Home.scss";

import Main from "./Main/Main";
import { Contact } from "../../common";

import ProjectsDisplayer from "./ProjectsDisplayer/ProjectsDisplayer";

const Home = () => {
    return (
        <div className="Home">
            <Main />
            <ProjectsDisplayer />
        </div>
    );
};

const mapStateToProps = ({ loading, project }) => ({
    loading,
    project
});

export default connect(mapStateToProps)(Home);
