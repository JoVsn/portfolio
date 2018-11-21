import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Hamburger from '../../assets/imgs/hamburger.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.addResponsiveClass = this.addResponsiveClass.bind(this);
  }

  addResponsiveClass() {
    const x = document.querySelector(".Header");
    if (x.className === "Header") {
      x.className += " responsive";
    } else {
      x.className = "Header";
    }
  }

  render() {
    return (
      <nav className="Header">
        <span className="homeLink"><Link to="/">Jo.</Link></span>
        <span className="navLink"><Link to="/#works">Works</Link></span>
        <span className="navLink"><Link to="/about">About</Link></span>

        <img src={Hamburger} className="hamburger-logo" alt="logo" onClick={this.addResponsiveClass} />
        <div style={{ clear: "both" }}></div>
      </nav>
    );
  }
}

export default Header;
