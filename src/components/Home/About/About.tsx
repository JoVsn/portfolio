import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div className="about-container">
            <p className="about-me-short-description" data-aos="fade-up" data-aos-once="true">
                I'm <b>Jordan</b>, an <span className="strike">amazing</span> French{" "}
                <i>creative engineer</i>.
            </p>

            <div className="about-me-container">
                <div className="about-me-text">
                    <div data-aos="fade-right" data-aos-once="true">
                        <h2 className="about-me-title">What drives me</h2>
                        <p className="about-me-paragraph">
                            Passionate by digital arts and audiovisual works, I'm looking forward to
                            work on creative projects combining sounds, visual effects and
                            animation.
                            <br /> I expect to provide mind-blowing experiences through videos,
                            websites and various visual projects.
                        </p>
                    </div>
                    <div data-aos="fade-right" data-aos-once="true">
                        <h2 className="about-me-title">Aptitudes</h2>
                        <p className="about-me-paragraph">
                            I do film making and graphic works thanks to tools like Sony Vegas and
                            the Adobe Suite. I also code my websites with these languages and
                            libraries : Typescript, React, Sass, Angular, ThreeJS, Redux, ...
                        </p>
                    </div>
                </div>
                <div className="about-me-image-container"></div>
            </div>
        </div>
    );
};

export default About;
