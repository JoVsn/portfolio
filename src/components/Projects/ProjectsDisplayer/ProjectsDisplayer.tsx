import React from "react";
import { connect } from "react-redux";
import "./ProjectsDisplayer.scss";

import life_img from "../../../assets/imgs/life.png";
import { Link } from "react-router-dom";
import { IMainProject, IProject } from "../../../models/project";

interface IProps {
    projects: IMainProject[];
    forHomepage: boolean;
}

const ProjectsDisplayer = ({ projects, forHomepage }: IProps) => {
    return (
        <div className="ProjectsDisplayer">
            {projects &&
                Object.keys(projects)
                    .filter(projectKey => {
                        const onHomepage: boolean = projects[projectKey].onHomepage;
                        console.log(forHomepage)
                        console.log(onHomepage)
                        if (forHomepage && onHomepage === true) return projectKey;
                        else if (forHomepage && onHomepage === false) return undefined;
                        return projectKey;
                    })
                    .map(projectKey => {
                        const project: IMainProject = projects[projectKey];
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

const mapStateToProps = ({ projects }: { projects: IMainProject[] }) => {

    const mainProjects: IMainProject[] = Object.values(projects).filter((project: IMainProject) => project.isMain)

    return {

        projects: mainProjects
    }
};

export default connect(mapStateToProps)(ProjectsDisplayer);
