import React, { Component } from 'react';
import './ProjectGallery.scss'

import ProjectTmb from '../ProjectTmb/ProjectTmb';

import mobilites_img from '../../assets/imgs/mobilites.png';
import grdf_img from '../../assets/imgs/grdf.png';
import life_img from '../../assets/imgs/life.png';
import muse_img from '../../assets/imgs/muse.png';
import hoverboard_img from '../../assets/imgs/hoverboard.png';

class ProjectGallery extends Component {
  render() {
    return (
      <div className="ProjectGallery" id="works">
        {/* <h1>Projects</h1> */}
        <div className="project-container">
          <ProjectTmb title="GRDF - Internship" imgSrc={grdf_img} projectId="grdf"/>
          <ProjectTmb title="Mobilités Descartes" imgSrc={mobilites_img} projectId="mobilites"/>
          <ProjectTmb title="Life" imgSrc={life_img} projectId="life"/>
          <ProjectTmb title="Hoverboard 3000" imgSrc={hoverboard_img} projectId="hoverboard"/>
          <ProjectTmb title="Muse" imgSrc={muse_img} projectId="muse"/>
        </div>
      </div>
    );
  }
}

export default ProjectGallery;
