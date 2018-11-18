import React, { Component } from 'react';
import './ProjectTmb.scss'
import { Link } from 'react-router-dom';

class ProjectTmb extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.imgSrc = props.imgSrc;
    this.projectId = props.projectId;
    this.url = `/project/${props.projectId}`;

  }
  render() {
    return (
      <div className="ProjectTmb">
        <Link to={{pathname: this.url, state: {projectId: this.projectId}}}>
          <div className="project-tmb-container">
            <span>{this.title}</span>
            <img className="main-img" src={this.imgSrc} alt={this.title} />
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectTmb;
