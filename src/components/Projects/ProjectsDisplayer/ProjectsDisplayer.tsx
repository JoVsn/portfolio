import React from "react";
import { connect } from "react-redux";
import "./ProjectsDisplayer.scss";

import { Link } from "react-router-dom";
import { IMainProject } from "../../../models/project";

interface IProps {
    projects: IMainProject[];
    forHomepage: boolean;
}

const ProjectsDisplayer = ({ projects, forHomepage }: IProps) => {
    return (
        <div className="ProjectsDisplayer">
            {projects &&
                projects
                    .filter((project: IMainProject) => {
                        const onHomepage: boolean = project.onHomepage;
                        if (forHomepage && onHomepage === true) return project;
                        else if (forHomepage && onHomepage === false) return undefined;
                        return project;
                    })
                    .map((project: IMainProject) => {
                        return (
                            <div className={`ProjectElement`} key={project.projectId}>
                                <Link to={`/project/${project.projectId}`}>
                                    <div className="img-container img-hover-zoom--brightness">
                                        <img src={project.medias.thumbnailUrl} alt={project.name} />
                                        <span>{project.name}</span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
        </div>
    );
};

const mapStateToProps = ({ projects }: { projects: IMainProject[] }) => {
    const mainProjects: IMainProject[] = Object.values(projects).filter(
        (project: IMainProject) => project.isMain,
    );

    return {
        projects: mainProjects,
    };
};

export default connect(mapStateToProps)(ProjectsDisplayer);
