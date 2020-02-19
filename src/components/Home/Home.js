import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import "./Home.scss";

import ProjectsDisplayer from '../Projects/ProjectsDisplayer/ProjectsDisplayer';

const Home = () => {
    return (
        <div className="Home">
{/*                 <Fade bottom delay>
                    <div className="project-name-container">
                        <h1>Scroll to begin your journey through the projects.</h1>
                    </div>
                </Fade> */}
                <Fade bottom>
                    <ProjectsDisplayer homepage />
                </Fade>
        </div>
    );
};

const mapStateToProps = ({ loading, project }) => ({
    loading,
    project,
});

export default connect(mapStateToProps)(Home);
