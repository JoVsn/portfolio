import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { animateScroll as scroll, scroller } from 'react-scroll';

import './Header.scss';
import Hamburger from '../../assets/imgs/hamburger.png';

class Header extends Component {
  addResponsiveClass() {
    const x = document.querySelector(".Header");
    if (x.className === "Header") {
      x.className += " responsive";
    } else {
      x.className = "Header";
    }
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
      <nav className="Header">
        <span className="homeLink"><Link to="/">Joordvn</Link></span>
        <span className="navLink"><Link to="/works">Works</Link></span>
        <span className="navLink"><Link to="/about">About</Link></span>

        <img src={Hamburger} className="hamburger-logo" alt="logo" onClick={this.addResponsiveClass} />
        <div style={{ clear: "both" }}></div>
      </nav>
    );
  }
}

export default Header;
