import React from "react";

import "./Footer.scss";

const Footer = () => (
    <footer className="Footer">
        <div>
            <span>All rights reserved - Jordan VILSAINT © {new Date().getFullYear()}</span>
        </div>
    </footer>
);

export default Footer;
