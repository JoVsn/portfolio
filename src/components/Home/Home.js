import React from "react";
import { connect } from "react-redux";

import "./Home.scss";

import ProjectsDisplayer from "./ProjectsDisplayer/ProjectsDisplayer";

const Home = () => {
    return (
        <div className="Home home-wrapper">
            <div className="home-main">
                <div className="project-name-container">
                    <h1>Project Name</h1>
                </div>
                <ProjectsDisplayer />
            </div>
        </div>
    );
};

const mapStateToProps = ({ loading, project }) => ({
    loading,
    project
});

export default connect(mapStateToProps)(Home);
