import React, { useState } from "react";
import { kyotologo } from "../../assets";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id) => {
    document.getElementById(id).classList.toggle("hidden");
  };

  return (
    <div className="fixed top-0 right-0 left-0 mt-6 px-8 z-20">
      <nav className="bg-primary border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md rounded-full">
        <div className="flex flex-wrap items-center justify-between p-4 px-8">
          <a href="#" className="flex items-center">
            <img src={kyotologo} className="h-8 mr-3" alt="kyotoLogo" />
          </a>
          <button
            id="navbar-toggle"
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full  md:block md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="
                              py-2 my-2  pl-3 pr-4 text-white rounded md-border-0  md-p-0 dark-text-white 
                              flex items-center justify-between w-full border-b border-gray-100  md:border-0 md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 "
                  onClick={() => toggleDropdown("dropdownNavbar")}
                >
                  Content1
                </a>
                <div
                  id="dropdownNavbar"
                  className="absolute z-10 hidden font-normal bg-white divide-y  divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        content
                      </a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        content
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-400 dark-hover-text-white"
                      >
                        C#
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-400 dark-hover-text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md-hover-bg-transparent md-border-0 md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md-hover-bg-transparent md-border-0 md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md-hover-bg-transparent md-border-0 md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
