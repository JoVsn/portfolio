import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import "./Project.scss";

import ProjectNav from "./ProjectNav/ProjectNav";

import shopping_img from "../../assets/imgs/shopping.png";
import ecosystems_img from "../../assets/imgs/ecosystems.png";
import grdf_img from "../../assets/imgs/grdf.png";
import life_img from "../../assets/imgs/life.png";

import projects from "../../assets/datas/projects.json";

import { showLoading, hideLoading } from "../../actions/loading";
import { TRANSITION_TIME } from "../../constants";

const Project = ({ dispatch, match }) => {
    const [project, setProject] = useState(null);

    useEffect(() => {
        dispatch(showLoading());
        setProject(
            projects.find(element => {
                return element.projectId === match.params.projectId;
            })
        );
        const id = setTimeout(() => dispatch(hideLoading()), TRANSITION_TIME);
        window.scrollTo(0, 0);
        return () => clearTimeout(id);
    }, [match.params.projectId, dispatch]);

    useEffect(() => {
        document.title = project
            ? `Jordan — ${project.name}`
            : "Jordan";
    }, [project]);

    // Return the image corresponding to the current project
    const getImage = () => {
        const imgs = {
            shopping_img: shopping_img,
            ecosystems_img: ecosystems_img,
            grdf_img: grdf_img,
            life_img: life_img,
        };
        const imgSrc = `${project.projectId}_img`;
        return imgs[imgSrc];
    };

    // Return the Id of the project based on the current one
    const getProjectIdFromThis = relativePosition => {
        const projectPosition = projects.findIndex(
            element => element.projectId === project.projectId
        );

        return projects[projectPosition + relativePosition]
            ? projects[projectPosition + relativePosition].projectId
            : undefined;
    };

    // Create html links to the projects
    const createLinks = () => {
        let res = [];
        for (let i = 0; i < project.links.length; i++) {
            const elem = (
                <a
                    href={project.links[i].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.links[i].link}
                >
                    <button>{project.links[i].caption}</button>
                </a>
            );
            if (project.links[i].active === true) res.push(elem);
        }
        return res;
    };

    if (project === undefined) {
        return <Redirect to="/project-not-found"></Redirect>;
    }
    return (
        project && (
            <div className="Project">
                <div className="project-title">
                    <h1>{project.name}</h1>
                    <h2>
                        {project.year} | {project.technologies}
                    </h2>
                </div>
                <div className="img-container">
                    <img src={getImage()} alt={project.name} />
                </div>
                <div className="content">
                    <p>{project.description}</p>
                    <div className="button-container">{createLinks()}</div>
                </div>
                <ProjectNav
                    previousProjectId={getProjectIdFromThis(-1)}
                    nextProjectId={getProjectIdFromThis(1)}
                />
            </div>
        )
    );
};

const mapStateToProps = ({ loading }) => ({
    loading
});

export default connect(mapStateToProps)(Project);
