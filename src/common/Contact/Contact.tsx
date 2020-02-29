import React from "react";
import { Fade } from "react-reveal";

import "./Contact.scss";
import github_img from "../../assets/imgs/github.png";
import youtube_img from "../../assets/imgs/youtube.png";

const Contact = () => {
    const handleRedirection = url => event => window.open(url, "_blank");

    return (
        <div className="Contact">
            <Fade bottom>
                <div className="contact-container">
                    <div
                        className="contact-element"
                        onClick={handleRedirection("https://github.com/jovsn")}>
                        <img src={github_img} alt="Github" />
                        <span>JoVsn</span>
                    </div>
                    <div
                        className="contact-element"
                        onClick={handleRedirection(
                            "https://www.youtube.com/channel/UCKrU6OwA0CZ1Hgc5CMgxltw",
                        )}>
                        <img src={youtube_img} alt="Youtube" />

                        <span>Joordvn</span>
                    </div>
                </div>
                <div className="contact-mail">
                    <span className="contact-slash">/</span>
                    <span>joordvn@gmail.com</span>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;
