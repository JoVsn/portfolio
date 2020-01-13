import React from "react";
import "./ProjectGallery.scss";

import ProjectTmb from "../ProjectTmb/ProjectTmb";

import shopping_img from "../../../assets/imgs/shopping.png";
import ecosystems_img from "../../../assets/imgs/ecosystems.png";
import mobilites_img from "../../../assets/imgs/mobilites.png";
import grdf_img from "../../../assets/imgs/grdf.png";
import life_img from "../../../assets/imgs/life.png";
import muse_img from "../../../assets/imgs/muse.png";
import hoverboard_img from "../../../assets/imgs/hoverboard.png";

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
            <ProjectTmb
                title="Mobilités Descartes"
                imgSrc={mobilites_img}
                projectId="mobilites"
            />
            <ProjectTmb title="Life" imgSrc={life_img} projectId="life" />
            <ProjectTmb
                title="Hoverboard 3000"
                imgSrc={hoverboard_img}
                projectId="hoverboard"
            />
            <ProjectTmb title="Muse" imgSrc={muse_img} projectId="muse" />
        </div>
    </div>
);

export default ProjectGallery;