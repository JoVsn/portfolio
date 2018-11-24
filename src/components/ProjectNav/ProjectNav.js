import React, { Component } from 'react';
import './ProjectNav.scss'
import { Link } from 'react-router-dom';

import projects from '../../assets/datas/projects.json';

class ProjectNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousProject: projects.find((element) => {
        return element.projectId === this.props.previousProjectId;
      }),
      nextProject: projects.find((element) => {
        return element.projectId === this.props.nextProjectId;
      })
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      previousProject: projects.find((element) => {
        return element.projectId === props.previousProjectId;
      }),
      nextProject: projects.find((element) => {
        return element.projectId === props.nextProjectId;
      })
    };
  }

  // Return project Url
  getUrl(projectId) {
    return `/project/${projectId}`;
  }

  render() {
    return (
      <div className="ProjectNav">
        {this.props.previousProjectId !== undefined &&
          <div className="previous-project">
            <Link to={{ pathname: this.getUrl(this.props.previousProjectId) }}>
              <button className="button-bordered dark-purple">{"Previous project | "} <strong>{this.state.previousProject.name}</strong></button>
            </Link>
          </div>
        }

        {this.props.nextProjectId !== undefined &&
          <div className="next-project">
            <Link to={{ pathname: this.getUrl(this.props.nextProjectId) }}>
              <button className="button-bordered dark-purple">{"Next project | "} <strong>{this.state.nextProject.name}</strong></button>
            </Link>
          </div>
        }

      </div>
    );
  }
}

export default ProjectNav;
