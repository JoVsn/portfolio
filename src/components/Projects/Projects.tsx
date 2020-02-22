import React from "react";
import { Fade } from "react-reveal";

import "./Projects.scss";
import ProjectsDisplayer from "./ProjectsDisplayer/ProjectsDisplayer";
import ProjectsList from "./ProjectsList/ProjectsList";
import { Link } from "react-router-dom";

export const Projects = () => {
    return (
        <div className="Projects">
            <Fade>
                <div className="more-projects-container">
                    <Link to="/more-projects">More works →</Link>
                </div>
            </Fade>
            <Fade bottom>
                <ProjectsDisplayer />
            </Fade>
        </div>
    );
};

export const MoreProjects = () => {
    return (
        <div className="Projects">
            <Fade>
                <div className="more-projects-container">
                    <Link to="/projects">← Back</Link>
                </div>
            </Fade>
            <Fade bottom>
                <ProjectsList />
            </Fade>
        </div>
    );
};
