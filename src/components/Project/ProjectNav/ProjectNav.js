import React, { useEffect, useState } from "react";
import "./ProjectNav.scss";
import { Link } from "react-router-dom";

import projects from "../../../assets/datas/projects.json";

const ProjectNav = props => {
    const [previousProject, setPreviousProject] = useState(null);
    const [nextProject, setNextProject] = useState(null);

    useEffect(() => {
        setPreviousProject(
            projects.find(element => {
                return element.projectId === props.previousProjectId;
            })
        );
        setNextProject(
            projects.find(element => {
                return element.projectId === props.nextProjectId;
            })
        );
    }, [props.previousProjectId, props.nextProjectId]);

    // Return project Url
    const getUrl = projectId => `/project/${projectId}`;

    return (
        <div className="ProjectNav">
            {props.previousProjectId !== undefined && (
                <div className="previous-project">
                    <Link
                        to={{
                            pathname: getUrl(props.previousProjectId)
                        }}
                    >
                        {previousProject && (
                            <button className="button-bordered dark-purple">
                                {"Previous project | "}{" "}
                                <strong>{previousProject.name}</strong>
                            </button>
                        )}
                    </Link>
                </div>
            )}

            {props.nextProjectId !== undefined && (
                <div className="next-project">
                    <Link to={{ pathname: getUrl(props.nextProjectId) }}>
                    {nextProject && (
                        <button className="button-bordered dark-purple">
                            {"Next project | "}{" "}
                            <strong>{nextProject.name}</strong>
                        </button>
                    )}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProjectNav;
