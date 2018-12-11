import React, { Component } from 'react';
import './About.scss'

import TransitionHolder from '../../shared/TransitionHolder/TransitionHolder';
import SkillBar from '../../shared/SkillBar/SkillBar';
import ContactBar from '../../shared/ContactBar/ContactBar';

import profile_img from '../../assets/imgs/profile-min.png';
import cv_file from '../../assets/files/cv.pdf';

class About extends Component {

  componentDidMount() {
    document.title = `Jordan Vilsaint — About`;
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="About">
        <TransitionHolder show={true} />
        <h1 className="mobile-title">About</h1>
        <div className="img-container">
          <img className="profile-img" src={profile_img} alt="Profile" />
        </div>
        <div className="presentation-content-container">
          <h1 className="desktop-title">About</h1>
          <p>Currently in my last year at the <a href="https://ingenieur-imac.fr/" className="strong">IMAC</a> (Image, Multimédia, Audiovisuel & Communication) Engineer School at Marne-La-Vallée.
            and passionate by digital arts, I'm looking forward to be a modern front-end developer, and to be able to work on innovative and artistic projects !</p>
          <a href={cv_file} target="_blank" rel="noopener noreferrer"><button className="resume button-bordered button-icon dark-purple"><i className="fas fa-2x fa-file-alt dark-purple"></i><span>Resume</span></button></a>
        </div>
        <div className="skills">
          <h2>Skills</h2>

          <div className="skills-container">
            <h3>Web</h3>
            <div className="skills-container-content">
              <SkillBar caption="HTML/CSS (Sass)" />
              <SkillBar caption="React" />
              <SkillBar caption="Angular" />
              <SkillBar caption="PHP, Laravel, Symfony" />
              <SkillBar caption="Others (Node, ExpressJS, Mongo, Django...)" />
            </div>
          </div>

          <div className="skills-container">
            <h3>Graphism & Video</h3>
            <div className="skills-container-content">
              <SkillBar caption="Video editing (Vegas, Premiere Pro, After Effects)" />
              <SkillBar caption="Graphism (Photoshop, Illustrator, Indesign)" />
            </div>
          </div>


          <div className="skills-container">
            <h3>Methodology</h3>
            <div className="skills-container-content">
              <SkillBar caption="UX Design" />
              <SkillBar caption="Agile Methodology" />
            </div>
          </div>

          <div className="skills-container">
            <h3>Languages</h3>
            <div className="skills-container-content">
              <SkillBar caption="French" />
              <SkillBar caption="English" />
              <SkillBar caption="Spanish" />
              <SkillBar caption="Italian" />
              <SkillBar caption="Creole" />
              <SkillBar caption="Japanese" />
            </div>
          </div>
          
        </div>
        <ContactBar />
      </div>
    );
  }
}

export default About;
