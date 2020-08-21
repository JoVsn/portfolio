import React from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";

import "./Project.scss";
import playIcon from "../../assets/imgs/play_icon.png";
import { IMainProject } from "../../models/project";

interface IProps {
    project: IMainProject;
}

const Project = ({ project }: IProps) => {
    const togglePlayVideo = play => {
        if (project.type === "other") return;
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
                        <div>
                            <span
                                key={`link_${idx}`}
                                className="project-link"
                                onClick={handleRedirection(link.url)}>
                                → {link.caption}
                            </span>
                        </div>
                    ),
            )}
        </div>
    );

    const getRedirectLink = links => links.find(link => link.priority === "primary");

    if (!project) return <div>Loading ...</div>;

    console.log(project);

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
                        onClick={handleRedirection(getRedirectLink(project.links).url)}
                        onMouseEnter={() => togglePlayVideo(true)}
                        onMouseLeave={() => togglePlayVideo(false)}>
                        <img
                            className={`project-media-image ${
                                project.type === "video" ? "" : "project-media-thumbnail"
                            }`}
                            src={project.medias.thumbnailUrl}
                            alt={project.projectId}
                        />
                        {project.type === "video" && (
                            <video className="project-media-displayed" muted loop>
                                <source src={project.medias.mainUrl} type="video/mp4" />
                            </video>
                        )}
                        <div className="project-media-link in-video">
                            <img
                                className="project-media-link-img"
                                src={playIcon}
                                alt="Watch on Youtube"
                            />
                            <span className="project-media-link-caption">
                                {getRedirectLink(project.links).caption}
                            </span>
                        </div>
                    </div>
                </Fade>

                <Fade left>
                    <div className="project-description-container">
                        <div>
                            <h2>Genre</h2>
                            <p>{project.genre}</p>
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
