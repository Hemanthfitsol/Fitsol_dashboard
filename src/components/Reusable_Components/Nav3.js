import { useState } from "react";
import { kyotologo } from "../../assets";
import { capabilitiesData, capabilitiesData1 } from "../../constants";
import Submenu from "../Kyoto/Submenu";
import Submenu1 from "../Kyoto/Submenu1";

const caret = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
  >
    <path
      d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
      fill="#434343"
    />
  </svg>
);
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // State to track whether Submenu should be displayed
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    // Toggle the state when the Capabilities menu is clicked
    setShowSubmenu(!showSubmenu);
    setShowSubmenu1(false);
  };

  const [showSubmenu1, setShowSubmenu1] = useState(false);

  const toggleSubmenu1 = () => {
    // Toggle the state when the Capabilities menu is clicked
    setShowSubmenu1(!showSubmenu1);
    setShowSubmenu(false);
  };

  return (
    <div className="fixed  max-w-full top-0 right-0 left-0 mt-6 px-8 z-20">
      <div className="flex items-center justify-between h-16 bg-primary py-8 px-8 rounded-full">
        <a href="/">
          <img src={kyotologo} alt="kyotologo" />
        </a>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col justify-start px-10 py-8">
                <li
                  className="my-4"
                  onClick={() => toggleDropdown("capabilities")}
                >
                  <div className="flex justify-start">
                    <div className="pr-20">
                      <a href="#">Capabilities</a>
                    </div>
                    <div className=" mt-3">{caret}</div>
                  </div>
                  {openDropdown === "capabilities" && (
                    <ul className="submenu-list mt-8">
                      {capabilitiesData.map((capability) => (
                        <li key={capability.id} className="my-2">
                          <a href="#">{capability.title}</a>
                          <p>{capability.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li
                  className="my-4"
                  onClick={() => toggleDropdown("solutions")}
                >
                  <div className="flex justify-start">
                    <div className="pr-20">
                      <a href="#">Solutions</a>
                    </div>
                    <div className=" mt-3">{caret}</div>
                  </div>
                  {openDropdown === "solutions" && (
                    <ul className="submenu-list mt-8">
                      {capabilitiesData1.map((capability) => (
                        <li key={capability.id} className="my-2">
                          <a href="#">{capability.title}</a>
                          <p>{capability.description}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="my-4">
                  <a href="#">About</a>
                </li>
                <li className="my-4">
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white ">
            <a href="#" onClick={toggleSubmenu}>
              Capabilities
            </a>
            <li>
              <a href="#" onClick={toggleSubmenu1}>Solutions</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
        <style>{`
          .hideMenuNav {
              display: none;
          }
          .showMenuNav {
              display: block;
              position: absolute;
              width: 90%;
              height: 100vh;
              top: 0;
              right: 0;
              background: white;
              z-index: 10;
              display: flex;
              flex-direction: column;
            //   align-items: center;
          }
        `}</style>
      </div>
      {showSubmenu && <Submenu />}
      {showSubmenu1 && <Submenu1 />}
    </div>
  );
}
