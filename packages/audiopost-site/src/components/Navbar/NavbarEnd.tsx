import React, { FunctionComponent } from 'react';
import { FaInstagram } from 'react-icons/fa';

const NavbarEnd: FunctionComponent = () => (
  <div className="social">
    <div className="item">
      <a
        href="https://www.instagram.com/audiopost.studio/"
        className="link--icon"
      >
        <FaInstagram />
      </a>
    </div>
  </div>
);

export default NavbarEnd;
