import React from "react";
import Fade from "react-reveal/Fade";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="Footer">
            <Fade left>
                <div>
                    <span>
                        All rights reserved - Jordan VILSAINT ©{" "}
                        {new Date().getFullYear()}
                    </span>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
