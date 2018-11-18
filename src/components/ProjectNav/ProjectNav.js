import React, { Component } from 'react';
import './ProjectNav.scss'
import { Link } from 'react-router-dom';

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.previousProjectId = props.previousProjectId;
    this.nextProjectId = props.nextProjectId;
    this.url = `/project/${props.projectId}`;

  }
  render() {
    return (
      <div className="ProjectNav">
        <Link to={{pathname: this.url, state: {title: this.title, imgSrc: this.imgSrc, projectId: this.projectId}}}>
        </Link>

        <Link to={{pathname: this.url, state: {title: this.title, imgSrc: this.imgSrc, projectId: this.projectId}}}>
        </Link>

      </div>
    );
  }
}

export default ProjectNav;
