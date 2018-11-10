import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.imgSrc = props.imgSrc;
  }
  render() {
    return (
      <div className="Main">
        <div className="content-container">
          <div className="main-title">
            <h1> Jordan Vilsaint </h1>
          </div>
          <div className="description">
            <span>Web • Video Making • Photography</span>
          </div>
          <div className="button-container">
            <a href="#works"><button>See my works</button></a>
          </div>
        </div>
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <div className="side-text-portfolio">
          <span>ポ<br />ー<br />ト<br />フ<br />ォ<br />リ<br />オ</span>
        </div>
      </div>
    );
  }
}

export default Main;
