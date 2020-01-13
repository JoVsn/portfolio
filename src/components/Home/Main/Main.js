import React, { useEffect } from "react";
// eslint-disable-next-line
import { animateScroll as scroll, scroller } from "react-scroll";
import TweenMax from "gsap";

import loadMyScript from "../../../scripts/textRotation";
import "./Main.scss";

import japaclouds_img from "../../../assets/imgs/japaclouds_unq.png";

const Main = () => {
    useEffect(() => {
        loadMyScript();

        let clouds_1 = document.getElementById("japanese-clouds-1");
        let clouds_2 = document.getElementById("japanese-clouds-2");
        let clouds_3 = document.getElementById("japanese-clouds-3");
        TweenMax.to(clouds_1, 2.3, { y: 35, repeat: -1, yoyo: true });
        TweenMax.to(clouds_2, 2.9, {
            y: 35,
            repeat: -1,
            yoyo: true,
            delay: 1.4
        });
        TweenMax.to(clouds_3, 2.5, {
            y: 35,
            repeat: -1,
            yoyo: true,
            delay: 0.75
        });
    }, []);

    const scrollToWorks = () => {
        scroller.scrollTo("works", {
            duration: 1500,
            delay: 0,
            smooth: "easeInOutQuart"
        });
    };

    return (
        <div className="Main">
            <div className="main-content">
                <div className="presentation-caption">
                    <span>
                        Hello, I'm Jordan, a young creative developer, who does
                        a lot of things.
                    </span>
                </div>
                <div className="description-caption">
                    <span>
                        Prepare you to encounter various types of projects...
                        but it's ok, just explore&nbsp;!
                    </span>
                </div>
                <div className="button-container">
                    <button to="works" onClick={() => scrollToWorks()}>
                        Scroll down
                    </button>
                </div>
            </div>
            <div className="content-background">
                <div style={{ position: "relative", height: "100%" }}>
                    <img
                        src={japaclouds_img}
                        alt="Japanese clouds"
                        id="japanese-clouds-1"
                    />
                    <img
                        src={japaclouds_img}
                        alt="Japanese clouds"
                        id="japanese-clouds-2"
                    />
                    <img
                        src={japaclouds_img}
                        alt="Japanese clouds"
                        id="japanese-clouds-3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
