import React from "react";
import { Fade } from "react-reveal";

import "./Home.scss";

import ProjectsDisplayer from "../Projects/ProjectsDisplayer/ProjectsDisplayer";

const Home = () => {
    return (
        <div className="Home">
            {/*                 <Fade bottom delay>
                    <div className="project-name-container">
                        <h1>Scroll to begin your journey through the projects.</h1>
                    </div>
                </Fade> */}
            <Fade bottom>
                <ProjectsDisplayer forHomepage />
            </Fade>
        </div>
    );
};

export default Home;
