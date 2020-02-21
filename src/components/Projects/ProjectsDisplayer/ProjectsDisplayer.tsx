import React from "react";
import { connect } from "react-redux";
import "./ProjectsDisplayer.scss";

import life_img from "../../../assets/imgs/life.png";
import { Link } from "react-router-dom";

const ProjectsDisplayer = ({ projects, homepage }) => {
    return (
        <div className="ProjectsDisplayer">
            {projects &&
                Object.keys(projects)
                    .filter(projectKey => {
                        if (homepage && projects[projectKey].homepage === true) return projectKey;
                        else if (homepage && projects[projectKey].homepage === false)
                            return undefined;
                        return projectKey;
                    })
                    .map(projectKey => {
                        const project = projects[projectKey];
                        return (
                            <div className={`ProjectElement`} key={projectKey}>
                                <Link to={`/project/${projectKey}`}>
                                    <div className="img-container img-hover-zoom--brightness">
                                        <img src={life_img} alt={project.name} />
                                        <span>{project.name}</span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
        </div>
    );
};

const mapStateToProps = ({ projects }) => ({
    projects,
});

export default connect(mapStateToProps)(ProjectsDisplayer);
