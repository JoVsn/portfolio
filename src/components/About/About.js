import React, { Component } from 'react';
import './About.scss'

import profile_img from '../../assets/imgs/profile.png';
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
          <p>Currently in my last year at the <a href="https://ingenieur-imac.fr/" className="strong">IMAC</a> (Image, Multimédia, Audiovisuel & Communication) Engineer School at Marne-La-Vallée.
            and passionate by digital arts, I'm looking forward to be a talented front-end developer, and to be able to work on innovative and artistic projects !</p>
          <a href={cv_file} target="_blank" rel="noopener noreferrer"><button className="resume button-bordered button-icon dark-purple"><i className="fas fa-3x fa-file-alt dark-purple"></i><span>Resume</span></button></a>
        </div>
      </div>
    );
  }
}

export default About;
