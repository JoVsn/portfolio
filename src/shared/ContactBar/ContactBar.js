import React from 'react';

import './ContactBar.scss';
import github_img from '../../assets/imgs/github.png';
import linkedin_img from '../../assets/imgs/linkedin.png';
import youtube_img from '../../assets/imgs/youtube.png';
import mail_img from '../../assets/imgs/mail.png';

const ContactBar = () => {
    return (
        <div className="ContactBar">
            <div className="contact-container">
                <div className="logo-container">
                    <a href="https://github.com/jovsn" target="_blank" rel="noopener noreferrer">
                        <img src={github_img} alt="Github" />
                    </a>
                </div>
                <div className="logo-container">
                    <a href="https://www.youtube.com/channel/UCKrU6OwA0CZ1Hgc5CMgxltw" target="_blank" rel="noopener noreferrer">
                        <img src={youtube_img} alt="Youtube" />
                    </a>
                </div>
                <div className="logo-container">
                    <a href="https://linkedin.com/in/jordan-v-7b7734b0/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin_img} alt="LinkedIn" />
                    </a>
                </div>
                <div className="logo-container">
                    <a href="mailto:vilsaint.jordan@gmail.com?subject=Contact via votre Portfolio" target="_blank" rel="noopener noreferrer">
                        <img src={mail_img} alt="Adresse mail : vilsaint.jordan@gmail.com" />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default ContactBar;
