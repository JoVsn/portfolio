import React from "react";
import { Fade } from "react-reveal";

import "./Home.scss";

import ProjectsDisplayer from "../Projects/ProjectsDisplayer/ProjectsDisplayer";

const Home = () => {
    return (
        <div className="Home">
            <Fade bottom>
                <div className="home-cta-container">
                    <span className="home-cta-caption">
                        EXPLORE. DISCOVER. IMMERSE.
                    </span>
                </div>
            </Fade>
            <Fade bottom>
                <ProjectsDisplayer forHomepage />
            </Fade>
        </div>
    );
};

export default Home;
