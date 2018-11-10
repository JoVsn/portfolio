import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Hamburger from '../../assets/imgs/hamburger.png';

class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <div className="homeLink">
            <span><Link to="/">Jordan Vilsaint</Link></span>
        </div>

        <div className="navLinks">
          <span><Link to="/about">About</Link></span>
          <span><Link to="/#works">Works</Link></span>
        </div>

        <img src={Hamburger} className="hamburger-logo" alt="logo" />

      </nav>
    );
  }
}

export default Header;
