import React, { Component } from 'react';
import './ProjectTmb.scss'
import { Link } from 'react-router-dom';

class ProjectTmb extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.title = props.title;
    this.imgSrc = props.imgSrc;
    this.url = `/project/${props.id}`;

  }
  render() {
    return (
      <div className="ProjectTmb">
        <Link to={{pathname: this.url, state: {title: this.title, imgSrc: this.imgSrc}}}>
          <div className="project-tmb-container">
            <span>{this.title}</span>
            <img className="main-img" src={this.imgSrc} alt="" />
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectTmb;
