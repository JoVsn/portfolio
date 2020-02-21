import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { animateScroll as scroll } from "react-scroll";
import { SCROLL_TOP_OFFSET, SCROLL_TOP_DURATION, FADE_DURATION_QUICK} from "../../constants";

import "./ScrollTopButton.scss";

const ScrollTopButton = () => {
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = e => {
        const posY =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        setScrollTop(posY);
    };

    const handleClick = e => {
        scroll.scrollToTop({ duration: SCROLL_TOP_DURATION });
    };

    return (
        <Fade bottom when={scrollTop > SCROLL_TOP_OFFSET} duration={FADE_DURATION_QUICK}>
            <div className="ScrollTopButton" onClick={handleClick}>
                <span>← Scroll to top</span>
            </div>
        </Fade>
    );
};

export default ScrollTopButton;
