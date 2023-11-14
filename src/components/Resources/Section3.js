import React, { useState } from "react";

const Navbar = () => {
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  const toggleMenu1 = () => {
    setOpenMenu1(!openMenu1);
    setOpenMenu2(false);
  };

  const toggleMenu2 = () => {
    setOpenMenu2(!openMenu2);
    setOpenMenu1(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="your-logo.png" alt="Logo" className="w-10 h-10" />
          {/* <div className="text-white text-xl font-semibold">Your Brand</div> */}
        </div>
        <ul className="flex space-x-6">
          <li className="relative group">
            <button
              className="text-white hover:underline"
              onClick={toggleMenu1}
            >
              Menu 1
            </button>
            {openMenu1 && (
              <ul className="absolute left-0 mt-2 p-2 space-x-40 bg-white border rounded-md space-y-2">
                <li>Submenu 1</li>
                <li>Submenu 2</li>
                <li>Submenu 3</li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <button
              className="text-white hover:underline"
              onClick={toggleMenu2}
            >
              Menu 2
            </button>
            {openMenu2 && (
              <ul className="absolute left-0 mt-2 p-2 bg-white border rounded-md space-y-2">
                <li>Submenu 1</li>
                <li>Submenu 2</li>
                <li>Submenu 3</li>
              </ul>
            )}
          </li>
          <li>
            <button className="text-white hover:underline">Menu 3</button>
          </li>
          <li>
            <button className="text-white hover:underline">Menu 4</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
