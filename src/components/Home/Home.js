import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import "./Home.scss";

import ProjectsSlider from "./ProjectsSlider/ProjectsSlider";

const Home = () => {
    return (
        <div className="Home home-wrapper">
            <div className="home-main">
                <Fade bottom delay>
                    <div className="project-name-container">
                        <h1>Scroll to begin your journey through the projects.</h1>
                    </div>
                </Fade>
                <Fade>
                    <ProjectsSlider />
                </Fade>
            </div>
        </div>
    );
};

const mapStateToProps = ({ loading, project }) => ({
    loading,
    project,
});

export default connect(mapStateToProps)(Home);
