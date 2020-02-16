import React from "react";
// eslint-disable-next-line
import { animateScroll as scroll, scroller } from "react-scroll";

import "./Projects.scss";
import ProjectsDisplayer from "./ProjectsDisplayer/ProjectsDisplayer";

const Projects = () => {
    return (
        <div className="Projects">
            <span>More works →</span>
            <ProjectsDisplayer />
        </div>
    );
};

export default Projects;
