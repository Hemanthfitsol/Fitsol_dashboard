import { useState } from "react";
import { logo } from "../../assets";
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

  const closeMobileMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 left-0 mt-6 px-8 z-20 drop-shadow-xl">
      <div className="flex items-center justify-between h-16  bg-primary py-8 px-8 rounded-full">
        <a href="/">
          <img src={logo} alt="fitsol_logo" />
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
                <li className="my-4">
                  <div className="flex justify-start">
                    <div className="pr-20">
                      <a
                        href="#aboutUs"
                        className="text-2xl font-semibold"
                        onClick={() => {
                          toggleDropdown("aboutUs");
                          closeMobileMenu();
                        }}
                      >
                        About us
                      </a>
                    </div>
                  </div>
                </li>

                <li
                  className="my-4"
                  onClick={() => toggleDropdown("solutions")}
                >
                  <div className="flex justify-start">
                    <div className="pr-20">
                      <a
                        href="#services"
                        className="text-2xl font-semibold"
                        onClick={() => {
                          toggleDropdown("services");
                          closeMobileMenu();
                        }}
                      >
                        Services
                      </a>
                    </div>
                  </div>
                </li>
                <li className="my-4">
                  <a
                    href="#contactUs"
                    className="text-2xl font-semibold"
                    onClick={() => {
                      toggleDropdown("contactUs");
                      closeMobileMenu();
                    }}
                  >
                    Contact us
                  </a>
                </li>
                <li className="my-8">
                  <a
                    href="#contactUs"
                    className="text-hemanth border-solid border-2 text-2xl border-hemanth rounded-lg px-6 py-2"
                    onClick={() => {
                      toggleDropdown("contactUs");
                      closeMobileMenu();
                    }}
                  >
                    Get quote
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white ">
            <li>
              <a href="#aboutUs">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contactUs">Contact us</a>
            </li>
            <li>
              <a
                href="#contactUs"
                className="text-hemanth border-solid  border-2 border-hemanth rounded-lg px-6 py-2"
              >
                Get quote
              </a>
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
    </div>
  );
}
