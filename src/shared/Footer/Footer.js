import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <span>All rights reserved - Jordan VILSAINT © {(new Date()).getFullYear()}</span>
    </footer>
  );
}

export default Footer;
