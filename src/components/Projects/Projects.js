import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import "./Projects.scss";
import ProjectsDisplayer from "./ProjectsDisplayer/ProjectsDisplayer";
import ProjectsList from "./ProjectsList/ProjectsList";

const Projects = () => {
    const [isMoreWorksActive, setMoreWorksActive] = useState(false);

    const toggleMoreWorks = isActive => event => setMoreWorksActive(isActive);

    return (
        <div className="Projects">
            {!isMoreWorksActive ? (
                <>
                    <Fade left>
                        <div className="more-projects-container">
                            <span onClick={toggleMoreWorks(true)}>More works →</span>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <ProjectsDisplayer />
                    </Fade>
                </>
            ) : (
                <>
                    <Fade bottom>
                        <div className="more-projects-container">
                            <span onClick={toggleMoreWorks(false)}>← Back</span>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <ProjectsList />
                    </Fade>
                </>
            )}
        </div>
    );
};

export default Projects;
