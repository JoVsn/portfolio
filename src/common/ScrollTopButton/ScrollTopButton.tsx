import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { animateScroll as scroll } from "react-scroll";
import { SCROLL_TOP_OFFSET, SCROLL_TOP_DURATION, FADE_DURATION_QUICK} from "../../constants";

import "./ScrollTopButton.scss";

const ScrollTopButton = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollLimit, setScrollLimit] = useState(SCROLL_TOP_OFFSET)
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", () => handleResize)
    }, []);

    const handleScroll = e => {
        const posY =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        setScrollTop(posY);
    };

    const handleResize = e => {
        setScrollLimit(document.body.clientWidth / 3)
    }

    const handleClick = e => {
        scroll.scrollToTop({ duration: SCROLL_TOP_DURATION });
    };

    return (
        <Fade bottom when={scrollTop > scrollLimit} duration={FADE_DURATION_QUICK}>
            <div className="ScrollTopButton" onClick={handleClick}>
                <span>← Scroll to top</span>
            </div>
        </Fade>
    );
};

export default ScrollTopButton;
