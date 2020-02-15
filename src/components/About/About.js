import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import "./About.scss";
import { connect } from "react-redux";

import { Contact } from "../../common";

const About = ({ aptitudes }) => {
    const [aptitudeKey, setAptitudeKey] = useState("");

    useEffect(() => {
        document.title = `Jordan — About`;
        window.scrollTo(0, 0);
        if (aptitudes) setAptitudeKey(Object.keys(aptitudes)[0]);
    }, [aptitudes]);

    const handleChangeAptitude = aptitudeKey => event => {
        setAptitudeKey(aptitudeKey);
    };

    return (
        <div className="About">
            <div className="about-me-main">
                {/*             <Particles params={params} className="particles-container" />
                 */}{" "}
                <div className="main-content particles-js">
                    <Fade left>
                        <div className="presentation-caption">
                            <span>
                                Hello, I'm a creative developer and video maker.
                            </span>
                        </div>
                        <div className="scrolldown-action">
                            <LinkScroll
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}
                                to="about-me-short-description"
                            >
                                <span to="works">Get to know more</span>
                            </LinkScroll>
                        </div>
                    </Fade>
                </div>
            </div>
            <Fade bottom>
                <p className="about-me-short-description">
                    I'm <b>Jordan</b>, an <strike>amazing</strike> French{" "}
                    <i>creative engineer</i>.
                </p>
            </Fade>

            <div className="separator"></div>

            <div className="about-me-container">
                <Fade bottom>
                    <h1 className="about-me-title">What drives me</h1>
                    <div className="about-me-content">
                        <p className="about-me-long-description">
                            Passionate by digital arts and audiovisual works,
                            I'm looking forward to work on creative projects
                            combining sounds, visual effects and animation.
                            <br /> I expect to provide mind-blowing experiences
                            through videos, websites and various visual
                            projects.
                        </p>
                    </div>
                </Fade>
            </div>

            <div className="separator"></div>

            {aptitudes && (
                <div className="aptitudes-container">
                    <Fade bottom>
                        <h1 className="aptitudes-title">Aptitudes</h1>
                    </Fade>
                    <div className="aptitudes-content">
                        <Fade bottom>
                            <div className="aptitudes-table-indexes">
                                <ul>
                                    {Object.keys(aptitudes).map(key => (
                                        <li
                                            key={key}
                                            onClick={handleChangeAptitude(key)}
                                            className={
                                                key === aptitudeKey
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {aptitudes[key].title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Fade>
                        <div className="aptitudes-table-content">
                            {Object.keys(aptitudes).map(key => (
                                <Fade bottom when={key === aptitudeKey}>
                                    <div
                                        className={`aptitudes-table-content-description ${
                                            key === aptitudeKey ? "active" : ""
                                        }`}
                                    >
                                        <p>{aptitudes[key].description}</p>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="separator"></div>

            <Contact />
        </div>
    );
};

const mapStateToProps = ({ aptitudes }) => ({
    aptitudes
});

export default connect(mapStateToProps)(About);
