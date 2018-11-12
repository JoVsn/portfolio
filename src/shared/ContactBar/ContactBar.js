import React, { Component } from 'react';

import './ContactBar.scss';
import github_img from '../../assets/imgs/github.png';
import linkedin_img from '../../assets/imgs/linkedin.png';
import youtube_img from '../../assets/imgs/youtube.png';
import mail_img from '../../assets/imgs/mail.png';

class ContactBar extends Component {
  render() {
    return (
      <footer className="ContactBar">
        <div className="logo-container">
          <img src={github_img} alt="Github"/>
        </div>
        <div className="logo-container">
          <img src={youtube_img} alt="Youtube"/>
        </div>
        <div className="logo-container">
          <img src={linkedin_img} alt="LinkedIn"/>
        </div>
        <div className="logo-container">
          <img src= {mail_img}alt="Mail"/>
        </div>

      </footer>
    );
  }
}

export default ContactBar;
