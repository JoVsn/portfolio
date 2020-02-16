import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import "./ProjectsSlider.scss";

import life_img from "../../../assets/imgs/life.png";
import { Link } from "react-router-dom";

const ProjectsSlider = ({ projects }) => {
    const translateX = useRef(0);
    const isDown = useRef(false);
    let startX = useRef(0);
    let scrollLeft = useRef(0);

    const exploreThroughProjectsOnScroll = event => {
        const projectsWrapper = document.querySelector(".ProjectsSlider");
        const projectElements = document.querySelectorAll(".ProjectElement");
        const bodyElement = document.querySelector("body").getBoundingClientRect();
        const deltaY = event.deltaY;
        let newTranslateX = translateX.current.valueOf() + deltaY / 3;
        const projectElementsProps = projectElements[
            projectElements.length - 1
        ].getBoundingClientRect();

        const lastElementPositionX = projectElementsProps.x + projectElementsProps.width;
        const screenWidth = bodyElement.width;
        if (lastElementPositionX <= screenWidth && deltaY > -1) {
            let val = lastElementPositionX;
            while (val <= screenWidth) {
                newTranslateX -= 0.5;
                val += 0.5;
            }
            newTranslateX -= 0.5;
        }

        if (newTranslateX < 0) {
            while (newTranslateX < 0) {
                newTranslateX += 0.5;
            }
            newTranslateX += 0.5;
        }
        translateX.current = newTranslateX;
        projectsWrapper.style.transform = `translateX(${-newTranslateX}px)`;
    };

    const handleMouseDown = e => {
        const slider = document.querySelector("body");
        isDown.current = true;
        slider.classList.add("active");
        startX.current = e.pageX - slider.offsetLeft;
        scrollLeft.current = slider.scrollLeft;
    };
    const handleMouseUp = () => {
        const slider = document.querySelector("body");
        isDown.current = false;
        slider.classList.remove("active");
    };
    const handleMouseLeave = (e) => {
        e.preventDefault();
        const slider = document.querySelector("body");
        isDown.current = false;
        slider.classList.remove("active");
    };
    const handleMouseMove = e => {
        const slider = document.querySelector("body");
        e.preventDefault();
        if (!isDown.current) return;
        const x = e.pageX - slider.offsetLeft;
        const deltaX = -(x - startX.current.valueOf()) / 3; //scroll-fast
        const projectsWrapper = document.querySelector(".ProjectsSlider");
        const projectElements = document.querySelectorAll(".ProjectElement");
        let newTranslateX = translateX.current.valueOf() + deltaX / 3;
        const lastElementPositionX =
            projectElements[projectElements.length - 1].getBoundingClientRect().x +
            projectElements[projectElements.length - 1].getBoundingClientRect().width;
        const screenWidth = document.querySelector("body").getBoundingClientRect().width;
        if (lastElementPositionX <= screenWidth && deltaX > -1) {
            let val = lastElementPositionX;
            while (val <= screenWidth) {
                newTranslateX -= 0.5;
                val += 0.5;
            }
            newTranslateX -= 0.5;
        }
        if (newTranslateX < 0) {
            while (newTranslateX < 0) {
                newTranslateX += 0.5;
            }
            newTranslateX += 0.5;
        }
        translateX.current = newTranslateX;
        projectsWrapper.style.transform = `translateX(${-newTranslateX}px)`;
    };

    useEffect(() => {
        const slider = document.querySelector("body");
        window.addEventListener("wheel", exploreThroughProjectsOnScroll);
        slider.addEventListener("mousedown", handleMouseDown);
        slider.addEventListener("mouseup", handleMouseUp);
        slider.addEventListener("mouseleave", handleMouseLeave);
        slider.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("wheel", exploreThroughProjectsOnScroll);
            slider.removeEventListener("mousedown", handleMouseDown);
            slider.removeEventListener("mouseup", handleMouseUp);
            slider.removeEventListener("mouseleave", handleMouseLeave);
            slider.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="ProjectsSlider works">
            {projects &&
                Object.keys(projects).map(projectKey => {
                    const project = projects[projectKey];
                    return (
                        <div className={`ProjectElement`} key={projectKey}>
                            <Link to={`/project/${projectKey}`}>
                                <div className="img-container img-hover-zoom--brightness">
                                    <img src={life_img} alt={project.name} />
                                </div>
                                <p>{project.name}</p>
                            </Link>
                        </div>
                    );
                })}

            <div className={`ProjectElement`}>
                <Link to={`/project/life`}>
                    <div className="img-container img-hover-zoom--brightness">
                        <img src={life_img} alt="life" />
                    </div>
                    <p>Life</p>
                </Link>
            </div>
            <div className={`ProjectElement`}>
                <Link to={`/project/life`}>
                    <div className="img-container img-hover-zoom--brightness">
                        <img src={life_img} alt="life" />
                    </div>
                    <p>Life</p>
                </Link>
            </div>
            <div className={`ProjectElement`}>
                <Link to={`/project/life`}>
                    <div className="img-container img-hover-zoom--brightness">
                        <img src={life_img} alt="life" />
                    </div>
                    <p>Life</p>
                </Link>
            </div>
            <div className={`ProjectElement`}>
                <Link to={`/project/life`}>
                    <div className="img-container img-hover-zoom--brightness">
                        <img src={life_img} alt="life" />
                    </div>
                    <p>Life</p>
                </Link>
            </div>
            <div className={`ProjectElement`}>
                <Link to={`/project/life`}>
                    <div className="img-container img-hover-zoom--brightness">
                        <img src={life_img} alt="life" />
                    </div>
                    <p>Life</p>
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = ({ projects }) => ({
    projects,
});

export default connect(mapStateToProps)(ProjectsSlider);
