import React from "react";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    // bg-primary-p-600 this need to be included in config. file of tailwind for customized color
    <footer className="bg-col8 max-w-full h-100 text-white py-10">
      <div className="container max-w-full mx-auto grid grid-cols-4 text-start gap-2 px-8 py-8">
        <h2 className="col-span-4 lg:col-span-3 text-start lg:mx-0 tracking-[8px] text-xs md:text-sm lg:text-lg text-black font-poppins mb-1"></h2>
        <h1 className="col-span-4 text-start lg:col-span-3 lg:mx-0 text-4xl md:text-4xl lg:text-5xl font-extrabold text-heading font-serif ">
          Got questions?
        </h1>
        <div className="col-span-4 lg:col-span-3 lg:mx-0 underline w-16 h-1 bg-white mt-2 mb-2"></div>
        <p className="col-span-4 lg:col-span-3 lg:mx-0 text-start md:text-lg lg:text-xl text-secondary font-poppins">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dict..
        </p>
        <div className="col-span-4 lg:col-span-3 lg:mx-0 text-start font-semibold md:text-md lg:text-md mt-4 text-secondary font-poppins">
          <a
            href="#"
            className="text-hemanth border-solid border-2 border-hemanth rounded-xl px-4 py-4"
          >
            Let's connect
          </a>
        </div>
      </div>
      <div className="container max-w-full mx-auto grid grid-cols-1 gap-2 px-8 py-4">
        <div className="w-auto h-1 col-span-1 bg-white"></div>
      </div>
      <div className="container max-w-full h-100 lg:h-64 grid mx-auto xs:grid-cols-1 lg:grid-cols-7 pb-2">
        {/* Left side (email) */}
        <div className="text-white grid grid-cols-1 text-start lg:text-start xs:col-span-1 lg:col-span-2  mb-4">
          <div className="col-span-1 ">
            <h3 className="text-2xl font-semibold mx-8 mt-2">{props.t11}</h3>
            <h4 className="text-md col-span-1  mx-8">{props.t12}</h4>
            <p className="text-md  col-span-1 md:my-4 mx-8">{props.t13}</p>
          </div>
        </div>
        <div className="xs:col-span-1 lg:col-span-1"></div>
        {/* <div className="col-span-1 mx-auto"> */}
        {/* Right side (menu) */}
        {/* <div className="text-center lg:text-start mx-auto lg:mx-0 grid xs:grid-cols-1 "> */}
        <div className="xs:col-span-1 px-8 lg:px-0 text-start  lg:col-span-1">
          <h2 className="font-sans text-lg font-bold mb-2 mt-2">{props.t21}</h2>
          <ul>
            <li className="text-md mb-2">
              <a href="#aboutUs">{props.t22}</a>
            </li>
            <li className="text-md mb-2">
              <a href="#whoarewe">{props.t23}</a>
            </li>
            <li className="text-md mb-2">
              <a href="##">{props.t24}</a>
            </li>
            <li className="text-md mb-2">
              <a href="##">{props.t25}</a>
            </li>
            <li className="text-md mb-2">
              <a href="##">{props.t26}</a>
            </li>
            <li className="text-md mb-2">
              <a href="##">{props.t27}</a>
            </li>
          </ul>
        </div>
        <div className="xs:col-span-1 px-8 lg:px-0 text-start lg:text-start lg:col-span-1 ">
          <h2 className="font-sans text-lg font-bold mb-2 mt-2">{props.t31}</h2>
          <ul>
            <li className="text-md mb-2">
              <a href="#services">{props.t32}</a>
            </li>
            <li className="text-md mb-2">
              <a href="#ourclients">{props.t33}</a>
            </li>
          </ul>
        </div>
        <div className="xs:col-span-1 px-8 lg:px-0 text-start lg:text-start lg:col-span-1">
          <h2 className="font-sans text-lg font-bold mb-2 mt-2">{props.t41}</h2>
          <ul>
            <li className="text-md mb-2">
              <a href="#contactUs">{props.t42}</a>
            </li>
            <li className="text-md mb-2">
              <a href="##">{props.t43}</a>
            </li>
            <li className="text-md mb-2">
              <a href="##">{props.t44}</a>
            </li>
            <li className="text-md mb-2">
              <a href="##">{props.t45}</a>
            </li>
          </ul>
        </div>
        <div className="xs:col-span-1 px-8 lg:px-0 text-start lg:text-start lg:col-span-1 ">
          <ul>
            <li className="font-sans text-lg mb-2">
              <h2 className="font-sans text-lg font-bold mb-2 mt-2">
                {props.t51}
              </h2>
              {props.t52 !== null && (
                <a
                  href="#"
                  className="font-sans text-hemanth border-solid border-2 border-hemanth rounded-lg px-6 py-2"
                >
                  {props.t52}
                </a>
              )}
            </li>
            <li className=" text-md mb-2">
              <Link to="/terms">{props.t53}</Link>
            </li>
            <li className="text-md mb-2">
              <Link to="/privacy">{props.t54}</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;

<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4">
  <div className="footer-section">
    <h3 className="font-dongle text-2xl font-semibold mx-6">FITSOL</h3>
    <h4 className="text-sm mb-2 mx-6">email@fitsol.com</h4>
    <p className="text-sm mx-6">
      Jl, Tobanan Rya RT 003 Glagah Kidul, Tamanan, Bnaguntapan Bantul, DI
      Yogyakarta
    </p>
  </div>

  <div className="footer-section">
    <h2 className="font-sans text-lg font-bold mb-2">About Us</h2>
    <ul>
      <li className="text-sm">What we offer</li>
      <li className="text-sm">Who we are</li>
    </ul>
  </div>

  <div className="footer-section">
    <h2 className="font-sans text-lg font-bold mb-2">Services</h2>
    <ul>
      <li className="text-sm">Why choose us</li>
      <li className="text-sm">Our clients</li>
    </ul>
  </div>

  <div className="footer-section">
    <h2 className="font-sans text-lg font-bold mb-2">Contact Us</h2>
    <ul>
      <li className="text-sm">Contact us</li>
    </ul>
  </div>
</div>;
