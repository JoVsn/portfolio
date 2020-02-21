import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import "./Project.scss";
import life_img from "../../../assets/imgs/life.png";
import life_video from "../../../assets/videos/life.mp4";

const Project = ({ project }) => {
    const togglePlayVideo = play => {
        const video = document.querySelector(".project-media-container video");
        if (play) video.play();
        else {
            video.pause();
            video.currentTime = 0;
        }
    };

    const handleRedirection = url => event => window.open(url, "_blank");

    const getLinksComponent = () => (
        <div className="project-links-container">
            {project.links.map(
                (link, idx) =>
                    link.active && (
                        <span
                            key={`link_${idx}`}
                            className="project-link"
                            onClick={handleRedirection(link.url)}>
                            {link.caption}
                        </span>
                    ),
            )}
        </div>
    );

    const getRedirectLink = links => links.find(link => link.priority === "mainLink");

    if (!project) return <div>Loading ...</div>;

    return (
        <>
            <div className="Project project-wrapper">
                <div className="separator"></div>

                <Fade bottom>
                    <h1>{project.name}</h1>
                </Fade>

                <Fade bottom>
                    <div
                        className="project-media-container"
                        onClick={handleRedirection(getRedirectLink(project.links).url)}>
                        <img
                            src={life_img}
                            onMouseOver={() => togglePlayVideo(true)}
                            onMouseOut={() => togglePlayVideo(false)}
                            alt={project.id}
                        />
                        {project.type.toLowerCase() === "video" && (
                            <>
                                <video muted loop>
                                    <source src={life_video} type="video/mp4" />
                                </video>

                                <span className="project-link in-video">
                                    {getRedirectLink(project.links).caption}
                                </span>
                            </>
                        )}
                    </div>
                </Fade>

                <Fade left>
                    <div className="project-description-container">
                        <div>
                            <h2>Type</h2>
                            <p>{project.type}</p>
                        </div>
                        <div>
                            <h2>Client</h2>
                            <p>{project.client}</p>
                        </div>
                        <div>
                            <h2>Tools</h2>
                            <p>{project.tools}</p>
                        </div>
                    </div>
                </Fade>

                <Fade left>
                    <div className="project-content-container">
                        {getLinksComponent(project.links)}
                        <p>{project.description}</p>
                    </div>
                </Fade>
            </div>
        </>
    );
};

const mapStateToProps = ({ projects }, { match }) => ({
    project: projects[match.params.projectId],
});

export default connect(mapStateToProps)(Project);
