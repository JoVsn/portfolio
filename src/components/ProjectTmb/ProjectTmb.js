import React, { Component } from 'react';
import './ProjectTmb.scss'
import { Link } from 'react-router-dom';

const ProjectTmb = (props) => {
  return (
    <div className="ProjectTmb">
      <Link to={{ pathname: `/project/${props.projectId}` }}>
        <div className="project-tmb-container">
          <span>{props.title}</span>
          <img className="main-img" src={props.imgSrc} alt={props.title} />
        </div>
      </Link>
    </div>
  );
}


export default ProjectTmb;
