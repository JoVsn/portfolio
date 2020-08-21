import React from "react";
import { Fade } from "react-reveal";
import "./About.scss";

const About = () => {
    return (
        <div className="about-container">
            <Fade bottom>
                <p className="about-me-short-description">
                    I'm <b>Jordan</b>, an <span className="strike">amazing</span> French{" "}
                    <i>creative engineer</i>.
                </p>
            </Fade>

            <div className="about-me-container">
                <div className="about-me-text">
                    <Fade bottom>
                        <h2 className="about-me-title">What drives me</h2>
                        <p className="about-me-paragraph">
                            Passionate by digital arts and audiovisual works, I'm looking forward to
                            work on creative projects combining sounds, visual effects and
                            animation.
                            <br /> I expect to provide mind-blowing experiences through videos,
                            websites and various visual projects.
                        </p>
                    </Fade>
                    <Fade bottom>
                        <h2 className="about-me-title">Aptitudes</h2>
                        <p className="about-me-paragraph">
                            I do film making and graphic works thanks to tools like Sony Vegas and
                            the Adobe Suite. I also code my websites with these languages and
                            libraries : Typescript, React, Sass, Angular, ThreeJS, Redux, ...
                        </p>
                    </Fade>
                </div>
                <div className="about-me-image-container"></div>
            </div>
        </div>
    );
};

export default About;
