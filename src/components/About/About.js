import React, { useEffect, useState } from "react";
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
            <p className="about-me-short-description">
                I'm <b>Jordan</b>, an <strike>amazing</strike> French{" "}
                <i>creative engineer</i>.
            </p>

            <div className="separator"></div>

            <div className="about-me-container">
                <h1 className="about-me-title">What drives me</h1>
                <div className="about-me-content">
                    <p className="about-me-long-description">
                        Passionate by digital arts and audiovisual works, I'm
                        looking forward to work on creative projects combining
                        sounds, visual effects and animation.
                        <br /> I expect to provide mind-blowing experiences
                        through videos, websites and various visual projects.
                    </p>
                </div>
            </div>

            <div className="separator"></div>

            {aptitudes && (
                <div className="aptitudes-container">
                    <h1 className="aptitudes-title">Aptitudes</h1>
                    <div className="aptitudes-content">
                        <div className="aptitudes-table-indexes">
                            <ul>
                                {Object.keys(aptitudes).map(key => (
                                    <li key={key} onClick={handleChangeAptitude(key)}>{aptitudes[key].title}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="aptitudes-table-content">
                            <p className="aptitudes-table-content-description">
                                {aptitudeKey &&
                                    aptitudes[aptitudeKey].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="separator"></div>

            <Contact />
        </div>
    );
};

const mapStateToProps = ({ loading, aptitudes }) => ({
    loading,
    aptitudes
});

export default connect(mapStateToProps)(About);
