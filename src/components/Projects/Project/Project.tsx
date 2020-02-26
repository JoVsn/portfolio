import React from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";

import "./Project.scss";
import life_img from "../../../assets/imgs/life.png";
import life_video from "../../../assets/videos/life.mp4";
import playIcon from "../../../assets/imgs/play_icon.png";
import { IMainProject } from "../../../models/project";

interface IProps {
    project: IMainProject;
}

const Project = ({ project }: IProps) => {
    const togglePlayVideo = play => {
        const video: HTMLMediaElement | null = document.querySelector(
            ".project-media-container video",
        );
        if (play && video) video.play();
        else if (!play && video) {
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
                            className="project-media-thumbnail"
                            src={life_img}
                            onMouseOver={() => togglePlayVideo(true)}
                            onMouseOut={() => togglePlayVideo(false)}
                            alt={project.projectId}
                        />
                        {project.type.toLowerCase() === "video" && (
                            <>
                                <video muted loop>
                                    <source src={life_video} type="video/mp4" />
                                </video>

                                <div className="project-media-link in-video">
                                    <img className="project-media-link-img" src={playIcon} alt="Watch on Youtube" />
                                    <span className="project-media-link-caption">{getRedirectLink(project.links).caption}</span>
                                </div>
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
                        {getLinksComponent()}
                        <p>{project.description}</p>
                    </div>
                </Fade>
            </div>
        </>
    );
};

const mapStateToProps = ({ projects }: { projects: IMainProject[] }, { match }) => ({
    project: projects[match.params.projectId],
});

export default connect(mapStateToProps)(Project);
