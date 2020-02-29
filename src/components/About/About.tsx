import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link as LinkScroll } from "react-scroll";
import "./About.scss";
import { connect } from "react-redux";

import { Contact } from "../../common";
import { IAptitude } from "../../models/aptitudes";
import aboutMeImg from "../../assets/imgs/about-me.jpeg";
import aptitudeImg from "../../assets/imgs/shinjuku.jpeg";
import usePrevious from "../../hooks/usePrevious";

interface IProps {
    aptitudes: IAptitude[];
}

const About = ({ aptitudes }: IProps) => {
    const [aptitudeKey, setAptitudeKey] = useState<string>("");
    const previousKey = usePrevious(aptitudeKey);

    useEffect(() => {
        document.title = `Jordan — About`;
        window.scrollTo(0, 0);
        if (aptitudes) setAptitudeKey(Object.keys(aptitudes)[0]);
    }, [aptitudes]);

    useEffect(() => {
        if (previousKey === "") setAptitudeContentHeight();
        window.addEventListener("resize", setAptitudeContentHeight);
        return () => {
            window.removeEventListener("resize", setAptitudeContentHeight);
        };
    }, [aptitudeKey, previousKey]);

    const setAptitudeContentHeight = () => {
        const contentDescriptions: HTMLElement[] = Array.from(
            document.querySelectorAll(".aptitudes-table-content-description"),
        );
        const maxValueOfY = Math.max(...contentDescriptions.map(o => o.clientHeight), 0);
        const aptitudeTableContent: HTMLElement | null = document.querySelector(
            ".aptitudes-table-content",
        );
        if (aptitudeTableContent) aptitudeTableContent.style.height = `${maxValueOfY.toString()}px`;
    };

    const handleChangeAptitude = aptitudeKey => event => {
        setAptitudeKey(aptitudeKey);
    };

    if (!aptitudeKey) return <div>Loading ...</div>;

    return (
        <div className="About">
            <div className="about-me-main">
                {/*             <Particles params={params} className="particles-container" />
                 */}{" "}
                <div className="main-content particles-js">
                    <Fade left>
                        <div className="presentation-caption">
                            <span>Hello, I'm a creative developer and video maker.</span>
                        </div>
                        <div className="scrolldown-action">
                            <LinkScroll
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}
                                to="about-me-short-description">
                                <span>Get to know more</span>
                            </LinkScroll>
                        </div>
                    </Fade>
                </div>
            </div>
            <Fade bottom>
                <p className="about-me-short-description">
                    I'm <b>Jordan</b>, an <span className="strike">amazing</span> French{" "}
                    <i>creative engineer</i>.
                </p>
            </Fade>

            <div className="separator"></div>

            <div className="about-me-container">
                <Fade bottom>
                    <div className="about-me-text">
                        <h1 className="about-me-title">What drives me</h1>
                        <p className="about-me-description">
                            Passionate by digital arts and audiovisual works, I'm looking forward to
                            work on creative projects combining sounds, visual effects and
                            animation.
                            <br /> I expect to provide mind-blowing experiences through videos,
                            websites and various visual projects.
                        </p>
                    </div>
                </Fade>
                <div className="about-me-image-container">
                    <div
                        className="about-me-image"
                        style={{ backgroundImage: `url(${aboutMeImg})` }}></div>
                </div>
            </div>

            {/* <div className="separator"></div> */}

            {aptitudes && (
                <div className="aptitudes-container">
                    <div className="aptitudes-image-container">
                        <div
                            className="aptitudes-image"
                            style={{ backgroundImage: `url(${aptitudeImg})` }}></div>
                    </div>
                    <div className="aptitudes-text">
                        <Fade bottom>
                            <h1 className="aptitudes-title">Aptitudes</h1>
                        </Fade>
                        <div className="aptitudes-content">
                            <Fade bottom>
                                <div className="aptitudes-table-indexes">
                                    {Object.keys(aptitudes).map(apKey => (
                                        <div key={`index_${apKey}`}>
                                            <span
                                                onClick={handleChangeAptitude(apKey)}
                                                className={apKey === aptitudeKey ? "active" : ""}>
                                                {aptitudes[apKey].title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                            <div className="aptitudes-table-content">
                                {Object.keys(aptitudes).map(apKey => (
                                    <Fade
                                        key={`content_${apKey}`}
                                        bottom
                                        when={apKey === aptitudeKey}>
                                        <div
                                            className={`aptitudes-table-content-description ${
                                                apKey === aptitudeKey ? "active" : ""
                                            }`}>
                                            <p>{aptitudes[apKey].description}</p>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="about-me-want-to-contact">
                <Fade left>
                    <span>Want to contact me ?</span>
                </Fade>
            </div>
            <div className="about-me-contact">
                <Contact />
            </div>
        </div>
    );
};

const mapStateToProps = ({ aptitudes }: { aptitudes: IAptitude[] }) => ({
    aptitudes,
});

export default connect(mapStateToProps)(About);
