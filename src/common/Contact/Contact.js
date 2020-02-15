import React from "react";
import Fade from "react-reveal/Fade";

import "./Contact.scss";
import github_img from "../../assets/imgs/github.png";
import youtube_img from "../../assets/imgs/youtube.png";

const Contact = () => {
    return (
        <div className="Contact">
            <Fade bottom>
                <div className="contact-container">
                    <div className="contact-element">
                        <img src={github_img} alt="Github" />
                        <a
                            href="https://github.com/jovsn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>JoVsn</span>
                        </a>
                    </div>
                    <div className="contact-element">
                        <img src={youtube_img} alt="Youtube" />
                        <a
                            href="https://www.youtube.com/channel/UCKrU6OwA0CZ1Hgc5CMgxltw"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Joordvn</span>
                        </a>
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
