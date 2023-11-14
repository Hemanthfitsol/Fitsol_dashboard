import React, { useState } from 'react';
import Nav from '../Reusable_Components/Nav';
import { kyotologo } from '../../assets';
import Nav3 from '../Reusable_Components/Nav3';
import Dropdown1 from '../Reusable_Components/Dropdown1';

function Navbar() {
  return (
    <div>
      <Nav3/>
      {/* <Nav logo={kyotologo} 
      menu1='Capabilities' 
      menu2='Solutions' menu3='About' menu4='Resources' menu5={null} /> */}
    </div>
  );
}

export default Navbar;
