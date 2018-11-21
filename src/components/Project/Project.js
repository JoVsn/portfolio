import React, { Component } from 'react';
import { Redirect } from 'react-router'
import './Project.scss'
import ProjectNav from '../ProjectNav/ProjectNav';

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
      return element.projectId === props.match.params.projectId;
    });
    if (this.project) {
      this.imgSrc = `${this.project.projectId}_img`;
      this.imgs = {
        "mobilites_img": mobilites_img,
        "grdf_img": grdf_img,
        "life_img": life_img,
        "muse_img": muse_img,
        "hoverboard_img": hoverboard_img
      };
      this.projectPosition = projects.findIndex((element) => {
        return element.projectId === props.match.params.projectId;
      });
      this.previousProjectId = projects[this.projectPosition - 1] ? projects[this.projectPosition - 1].projectId : undefined;
      this.nextProjectId = projects[this.projectPosition + 1] ? projects[this.projectPosition + 1].projectId : undefined;
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.project = projects.find((element) => {
      return element.projectId === nextProps.match.params.projectId;
    });
    if (this.project) {
      this.imgSrc = `${this.project.projectId}_img`;
      this.imgs = {
        "mobilites_img": mobilites_img,
        "grdf_img": grdf_img,
        "life_img": life_img,
        "muse_img": muse_img,
        "hoverboard_img": hoverboard_img
      };
      this.projectPosition = projects.findIndex((element) => {
        return element.projectId === nextProps.match.params.projectId;
      });
      this.previousProjectId = projects[this.projectPosition - 1] ? projects[this.projectPosition - 1].projectId : undefined;
      this.nextProjectId = projects[this.projectPosition + 1] ? projects[this.projectPosition + 1].projectId : undefined;
    }
  }

  componentDidUpdate() {
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
    if (this.project === undefined) {
      return (
        <Redirect to="/project-not-found"></Redirect>
      );
    }
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
        <ProjectNav previousProjectId={this.previousProjectId} nextProjectId={this.nextProjectId} />
      </div>
    );
  }
}

export default Project;
