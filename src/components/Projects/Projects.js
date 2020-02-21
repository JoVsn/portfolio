import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import "./Projects.scss";
import ProjectsDisplayer from "./ProjectsDisplayer/ProjectsDisplayer";
import ProjectsList from "./ProjectsList/ProjectsList";

const Projects = () => {
    const [isMoreWorksActive, setMoreWorksActive] = useState(false);

    const toggleMoreWorks = isActive => event => setMoreWorksActive(isActive);
    const changeWorksSectionCaption = !isMoreWorksActive ? "More works →" : "← Back";

    return (
        <div className="Projects">
            <Fade left>
                <div className="more-projects-container">
                    <span onClick={toggleMoreWorks(!isMoreWorksActive)}>
                        {changeWorksSectionCaption}
                    </span>
                </div>
            </Fade>
            <Fade bottom when={isMoreWorksActive === false}>
                {!isMoreWorksActive && <ProjectsDisplayer />}
            </Fade>
            <Fade bottom when={isMoreWorksActive === true}>
                {isMoreWorksActive && <ProjectsList />}
            </Fade>
        </div>
    );
};

export default Projects;
