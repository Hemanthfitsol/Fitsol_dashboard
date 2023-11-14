import React from 'react';
import Nav from '../Reusable_Components/Nav';
import { logo } from '../../assets';

function Navbar() {
  return (
      <Nav logo={logo} menu1='About us' menu2='Services' menu3='Contact' menu4={null} menu5='Get quote'/>
  );
}
export default Navbar;
