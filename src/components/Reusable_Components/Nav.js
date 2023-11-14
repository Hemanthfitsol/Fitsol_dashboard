import React from 'react';
import Dropdown1 from '../Reusable_Components/Dropdown1';
function Nav(props) {
  return (
    <div className='fixed top-0 w-full z-20'>
      <nav className="container mx-auto bg-primary px-8 py-auto p-6 rounded-full my-2 h-20">
        <div className="container grid grid-cols-11">
          <div className="col-span-1">
            <img src={props.logo} alt="Company Logo"  />
          </div>
          <div className="col-span-6"></div>
          <div className="col-span-4 flex justify-end items-center space-x-6">
            <a href="#" className="text-white ">{props.menu1}</a>
            <a href="#" className="text-white ">{props.menu2}</a>
            <a href="#" className="text-white ">{props.menu3}</a>
            <a href="#" className="text-white ">{props.menu4}</a>
            {props.menu5 !== null && (
            <a href="#" className="text-hemanth border-solid border-2 border-hemanth rounded-lg px-6 py-2">{props.menu5}</a>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
