import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {  SCROLL_TOP_DURATION } from "../../constants";

import "./ScrollTopButton.scss";

const ScrollTopButton = () => {
    const handleClick = (e) => {
        scroll.scrollToTop({ duration: SCROLL_TOP_DURATION });
    };

    return (
        <div className="ScrollTopButton" onClick={handleClick}>
            <span>← Scroll to top</span>
        </div>
    );
};

export default ScrollTopButton;
