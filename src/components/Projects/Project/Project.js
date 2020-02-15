import React from "react";
// eslint-disable-next-line
import { animateScroll as scroll, scroller } from "react-scroll";

import "./Project.scss";
import life_img from "../../../assets/imgs/life.png";

const Project = () => {
    return (
        <div className="Project">
            <div className="separator"></div>
            <h1>Project Name</h1>
            <div className="project-image-container">
                <img src={life_img} />
            </div>
            <div className="project-description-container">
                <div>
                    <h2>Type</h2>
                    <p>Video</p>
                </div>
                <div>
                    <h2>Client</h2>
                    <p>IMAC - School Project</p>
                </div>
                <div>
                    <h2>Tools</h2>
                    <p>
                        Adobe After Effects, Adobe Premiere Pro, Sony Vegas,
                        Logic Pro
                    </p>
                </div>
            </div>

            <div className="project-content-container">
                <p>
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500, quand un imprimeur anonyme assembla ensemble
                    des morceaux de texte pour réaliser un livre spécimen de
                    polices de texte. Il n'a pas fait que survivre cinq siècles,
                    mais s'est aussi adapté à la bureautique informatique, sans
                    que son contenu n'en soit modifié. Il a été popularisé dans
                    les années 1960 grâce à la vente de feuilles Letraset
                    contenant des passages du Lorem Ipsum, et, plus récemment,
                    par son inclusion dans des applications de mise en page de
                    texte, comme Aldus PageMaker.
                </p>
            </div>
        </div>
    );
};

export default Project;
