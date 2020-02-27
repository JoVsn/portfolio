import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Header.scss";
import "./luxbar.scss";

const Header = () => {
    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            const element: HTMLElement | null = document.querySelector(".luxbar-hamburger");
            const checkbox: HTMLInputElement | null = document.querySelector(".luxbar-checkbox");
            if (element && checkbox && checkbox.checked) element.click();
        });
        return () => {
            unlisten();
        };
    }, [history]);

    const openMenu = e => {
        const element: HTMLElement | null = document.querySelector(".luxbar-checkbox");
        if (element) element.click();
    };

    return (
        <header id="luxbar" className="luxbar-static">
            <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
            <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
                <ul className="luxbar-navigation">
                    <li className="luxbar-header">
                        <Link to="/" className="luxbar-brand">
                            Joordvn
                        </Link>
                        <div
                            className="luxbar-hamburger luxbar-hamburger-spin"
                            id="luxbar-hamburger"
                            onClick={openMenu}>
                            <span></span>
                        </div>
                    </li>
                    <li className="luxbar-item">
                        <Link to="/projects">Works</Link>
                    </li>
                    <li className="luxbar-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
