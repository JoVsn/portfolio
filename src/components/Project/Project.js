import React, { Component } from 'react';
import './Project.scss'

import img_02 from '../../assets/imgs/02.jpg';

class Project extends Component {
  constructor(props) {
    super(props);
    this.title = (props.title !== '' && props.title !== undefined ? props.title : props.location.state.title);
    this.imgSrc = (props.imgSrc !== '' && props.imgSrc !== undefined ? props.imgSrc : props.location.state.imgSrc);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Project">
        <div className="img-container">
          <img src={this.imgSrc} alt={this.title} />
        </div>
        <div className="content-container">
          <h1>{this.title}</h1>
          <p>Lorem Ipsum</p>
          <a href="#">Lien vers le projet hihi</a>
        </div>
      </div>
    );
  }
}

export default Project;
