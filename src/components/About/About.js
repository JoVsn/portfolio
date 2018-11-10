import React, { Component } from 'react';
import './About.scss'

import profile_img from '../../assets/imgs/profile.png';
import github_img from '../../assets/imgs/github.png';
import mail_img from '../../assets/imgs/mail.svg';
import cv_file from '../../assets/files/cv.pdf';

class About extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.imgSrc = props.imgSrc;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="About">
        <div className="img-container">
          <img className="profile-img" src={profile_img} alt="Profile" />
        </div>
        <div className="presentation-content-container">
          <h1>About</h1>
          <p>Hello ! I'm Jordan Vilsaint !</p>
          <p>I'm currently in my last year at the <a href="https://ingenieur-imac.fr/" className="strong">IMAC</a> (Image, Multimédia, Audiovisuel & Communication) Engineer School at Marne-La-Vallée.
          <br />Passionate by digital arts, I'm looking forward to be a front-end developer, and to be able to work on innovative and artistic projects !</p>
          <a href={cv_file} target="_blank" rel="noopener noreferrer"><button className="resume button-bordered button-icon dark-purple"><i className="fas fa-3x fa-file-alt dark-purple"></i><span>Resume</span></button></a>

          <div className="contact">
            <div>
              <a href="https://github.com/jovsn" target="_blank" rel="noopener noreferrer"><button className="button-bordered button-icon dark-purple"><img src={github_img} alt="Github" /><span>Github</span></button></a>
            </div>
            <div>
              <a href="mailto:vilsaint.jordan@gmail.com"><button className="button-bordered button-icon dark-purple"><img src={mail_img} alt="Mail" /><span>Mail</span></button></a>
            </div>
          </div>
        </div>
        <div className="skills-content-container">
          <h1>What can I do ?</h1>
          <p>I studied for 2 years at the IUT of Marne-La-Vallée, where I got my first Computering Degree (DUT Informatique).
            Then I went to the IMAC Engineer School to develop my computering skills and to get new ones in various artistic domains.</p>
          <p></p>
          <div>
            <h2>Computering</h2>
          </div>
          <div>
            <h2>Graphism</h2>
          </div>
          <div>
            <h2>Video Editing</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
