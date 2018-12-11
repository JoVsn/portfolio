import React, { Component } from 'react';
// eslint-disable-next-line
import { animateScroll as scroll, scroller } from 'react-scroll';

import loadMyScript from '../../scripts/textRotation';
import './Main.scss';

import japaclouds_img from '../../assets/imgs/japaclouds.png';

class Main extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.imgSrc = props.imgSrc;
  }

  componentDidMount() {
    loadMyScript();
  }

  scrollToWorks() {
    scroller.scrollTo('works', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    return (
      <div className="Main">
        <div className="main-content">
          <div className="presentation-caption">
            <span>Hello, I'm Jordan, a junior front-end developer, who does a lot of things.</span>
          </div>
          <div className="description-caption">
            <span>Prepare you to encounter various types of projects... but it's ok, just explore&nbsp;!</span>
          </div>
          <div className="button-container">
            <button to="works" onClick={() => this.scrollToWorks()}>Scroll down</button>
          </div>
        </div>
        <div className="side-content">
          {/* <div className="side-content-container">
            <ul className="side-content-container-list">
              <li className="side-content-container-list-item">Web development</li>
              <li className="side-content-container-list-item">Video editing</li>
              <li className="side-content-container-list-item">Motion design</li>
              <li className="side-content-container-list-item">Graphism</li>
            </ul>
          </div> */}
          <span
            className="txt-rotate"
            data-period="900"
            data-rotate='[ "Web development", "Video editing", "Motion design", "Graphism", "Creativity" ]'></span><span>.</span>

        </div>
        <div className="content-background">
          <img src={japaclouds_img} alt="Japanese clouds" />
        </div>
        <div className="side-text-portfolio">
          <span>ポ<br />ー<br />ト<br />フ<br />ォ<br />リ<br />オ</span>
        </div>
      </div>
    );
  }
}

export default Main;
