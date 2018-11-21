import React, { Component } from 'react';
import loadMyScript from '../../scripts/textRotation';
import './Main.scss';


class Main extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.imgSrc = props.imgSrc;
  }

  componentDidMount() {
    loadMyScript();
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
            <a href="#works"><button>Scroll down</button></a>
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
            data-period="1100"
            data-rotate='[ "Web development", "Video editing", "Motion design", "Graphism", "Creativity" ]'></span><span>.</span>

        </div>
        <div className="side-text-portfolio">
          <span>ポ<br />ー<br />ト<br />フ<br />ォ<br />リ<br />オ</span>
        </div>
      </div>
    );
  }
}

export default Main;
