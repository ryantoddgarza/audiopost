import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Logo from '../../resources/audiopost-brandmark.svg';

const NavbarStart: FunctionComponent = () => (
  <div className="logo">
    <Link to="/" className="link">
      <Logo />
    </Link>
  </div>
);

export default NavbarStart;
