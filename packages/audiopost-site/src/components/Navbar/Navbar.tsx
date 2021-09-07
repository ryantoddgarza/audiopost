import React, { FunctionComponent } from 'react';
import { Navigation, navigationThemes } from 'audiopost-design';
import Start from './NavbarStart';
import Center from './NavbarCenter';
import End from './NavbarEnd';

const Navbar: FunctionComponent = () => (
  <Navigation
    start={<Start />}
    center={<Center />}
    end={<End />}
    theme={navigationThemes.DARK}
  />
);

export default Navbar;
