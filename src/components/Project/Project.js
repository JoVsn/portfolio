import React, { Component } from 'react';
import './Project.scss'

import mobilites_img from '../../assets/imgs/mobilites.png';
import grdf_img from '../../assets/imgs/grdf.png';
import life_img from '../../assets/imgs/life.png';
import muse_img from '../../assets/imgs/muse.png';
import hoverboard_img from '../../assets/imgs/hoverboard.png';
import projects from '../../assets/datas/projects.json';

class Project extends Component {
  constructor(props) {
    super(props);
    this.project = projects.find((element) => {
      return element.projectId === props.location.state.projectId;
    });
    this.imgSrc = `${this.project.projectId}_img`;
    this.imgs = {
      "mobilites_img": mobilites_img,
      "grdf_img": grdf_img,
      "life_img": life_img,
      "muse_img": muse_img,
      "hoverboard_img": hoverboard_img
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  createLinks() {
    let res = [];
    for (let i = 0; i < this.project.linkTo.length; i++) {
      const elem =
        (
          <a href={this.project.linkTo[i]} target="_blank" rel="noopener noreferrer" key={this.project.linkTo[i]}><button>{this.project.linkToCaption[i]}</button></a>
        );
      if (this.project.linkTo[i] !== '')
        res.push(elem);
    }
    return res;
  }

  render() {
    return (
      <div className="Project">
        <div className="project-title">
          <h1>{this.project.name}</h1>
          <h2>{this.project.year} | {this.project.technologies}</h2>
        </div>
        <div className="img-container">
          <img src={this.imgs[this.imgSrc]} alt={this.project.name} />
        </div>
        <div className="content">
          <p>{this.project.description}</p>
          <div className="button-container">
            {this.createLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
