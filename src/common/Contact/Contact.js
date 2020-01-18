import React from "react";

import "./Contact.scss";
import github_img from "../../assets/imgs/github.png";
import linkedin_img from "../../assets/imgs/linkedin.png";
import youtube_img from "../../assets/imgs/youtube.png";
import mail_img from "../../assets/imgs/mail.png";

const Contact = () => {
    return (
        <div className="Contact">
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
                <span className="contact-slash">/</span><span>joordvn@gmail.com</span>
            </div>
        </div>
    );
};

export default Contact;
