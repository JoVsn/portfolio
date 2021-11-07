import React from "react";
import "./ProjectsDisplayer.scss";

import { Link } from "react-router-dom";
import { IMainProject } from "../../../models/project";

interface IProps {
    projects?: IMainProject[];
    forHomepage?: boolean;
}

const ProjectsDisplayer = ({ projects, forHomepage }: IProps) => {
    return (
        <>
            <h1>My Works</h1>
            <div className="projects-container">
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
                                    <span>{project.name}</span>
                                    <Link to={`/project/${project.projectId}`}>
                                        <div className="img-container img-hover-zoom--brightness">
                                            <img
                                                src={project.medias.thumbnailUrl}
                                                alt={project.name}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
            </div>
        </>
    );
};

export default ProjectsDisplayer;
