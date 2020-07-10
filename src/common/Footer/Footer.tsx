import React from "react";
import { Fade } from "react-reveal";

import "./Footer.scss";

const Footer = () => (
    <footer className="Footer">
        <Fade left>
            <div>
                <span>All rights reserved - Jordan VILSAINT © {new Date().getFullYear()}</span>
            </div>
        </Fade>
    </footer>
);

export default Footer;
