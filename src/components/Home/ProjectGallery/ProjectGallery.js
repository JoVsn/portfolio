import React from "react";
import "./ProjectGallery.scss";

import ProjectTmb from "../ProjectTmb/ProjectTmb";

import shopping_img from "../../../assets/imgs/shopping.png";
import ecosystems_img from "../../../assets/imgs/ecosystems.png";
import grdf_img from "../../../assets/imgs/grdf.png";
import life_img from "../../../assets/imgs/life.png";

const ProjectGallery = () => (
    <div className="ProjectGallery" id="works">
        <div className="project-container">
            <ProjectTmb
                title="Shopping Assistant"
                imgSrc={shopping_img}
                projectId="shopping"
            />
            <ProjectTmb
                title="Ecosystems"
                imgSrc={ecosystems_img}
                projectId="ecosystems"
            />
            <ProjectTmb
                title="GRDF - Internship"
                imgSrc={grdf_img}
                projectId="grdf"
            />
            <ProjectTmb title="Life" imgSrc={life_img} projectId="life" />
        </div>
    </div>
);

export default ProjectGallery;
