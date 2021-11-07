import React from "react";
import { Link as LinkScroll } from "react-scroll";

const Main = () => (
    <div className="home-introduction" data-aos="fade-right">
        <div className="main-content">
                <div className="presentation-caption">
                    <span>Hello, I'm a creative developer and video maker.</span>
                </div>
                <div className="scrolldown-actions">
                    <LinkScroll
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        to="about-me-short-description">
                        <span>Get to know more, </span>
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        to="ProjectsDisplayer">
                        <span>explore my works, </span>
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        to="Contact">
                        <span>or contact me.</span>
                    </LinkScroll>
                </div>
        </div>
    </div>
);

export default Main;
