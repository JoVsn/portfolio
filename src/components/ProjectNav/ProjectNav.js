import React, { Component } from 'react';
import './ProjectNav.scss'
import { Link } from 'react-router-dom';

import projects from '../../assets/datas/projects.json';

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.previousProjectId = props.previousProjectId;
    this.nextProjectId = props.nextProjectId;
    this.urlPrev = `/project/${props.previousProjectId}`;
    this.urlNext = `/project/${props.nextProjectId}`;

    this.previousProject = projects.find((element) => {
      return element.projectId === this.previousProjectId;
    });
    this.nextProject = projects.find((element) => {
      return element.projectId === this.nextProjectId;
    });
  }

  componentWillReceiveProps(nextProps) {
    this.previousProjectId = nextProps.previousProjectId;
    this.nextProjectId = nextProps.nextProjectId;
    this.urlPrev = `/project/${nextProps.previousProjectId}`;
    this.urlNext = `/project/${nextProps.nextProjectId}`;

    this.previousProject = projects.find((element) => {
      return element.projectId === this.previousProjectId;
    });
    this.nextProject = projects.find((element) => {
      return element.projectId === this.nextProjectId;
    });

  }

  render() {
    return (
      <div className="ProjectNav">
        {this.previousProjectId !== undefined &&
          <div className="previous-project">
            <Link to={{ pathname: this.urlPrev }}>
              <button className="button-bordered dark-purple">{"Previous project | "} <strong>{this.previousProject.name}</strong></button>
            </Link>
          </div>
        }

        {this.nextProjectId !== undefined &&
          <div className="next-project">
            <Link to={{ pathname: this.urlNext}}>
              <button className="button-bordered dark-purple">{"Next project | "} <strong>{this.nextProject.name}</strong></button>
            </Link>
          </div>
        }

      </div>
    );
  }
}

export default ProjectNav;
