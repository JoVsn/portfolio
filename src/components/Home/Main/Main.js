import React from "react";
// eslint-disable-next-line
import { animateScroll as scroll, scroller } from "react-scroll";
import Particles from "react-particles-js";

import params from "../../../assets/animated/particles.json";

import "./Main.scss";

const Main = () => {
    const scrollToWorks = () => {
        scroller.scrollTo("works", {
            duration: 1500,
            delay: 0,
            smooth: "easeInOutQuart"
        });
    };

    return (
        <div className="Main">
{/*             <Particles params={params} className="particles-container" />
 */}            <div className="main-content particles-js">
                <div className="presentation-caption">
                    <span>Hello, I'm a creative developer and a digital artist.</span>
                </div>
                <div className="scrolldown-action">
                    <span to="works" onClick={() => scrollToWorks()}>
                        Scroll down to explore
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Main;
