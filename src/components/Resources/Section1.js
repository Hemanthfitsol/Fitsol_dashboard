import React from "react";
import Resources_1 from "../../assets/Resources_1.png";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
  >
    <path
      d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z"
      fill="#060DBF"
    />
  </svg>
);

const Section1 = () => {
  return (
    <div>
      <div className="container max-w-full grid grid-cols-3 grid-rows- mx-auto bg-col1 mt-40 mb-4">
        {/* items-center in x-axis justify-center in y-axis */}
        <div className="col-span-2 flex flex-col  justify-center bg-col1 px-8">
          <h1 className="col-span-3  mx-auto lg:col-span-2 lg:mx-0 text-4xl md:text-4xl lg:text-7xl font-extrabold text-heading font-serif">
            Lorem ipsum dolor sit amet conse
          </h1>
          <div className="col-span-2 lg:mx-0 underline w-16 h-1 bg-primary mt-2 mb-2"></div>
          <div className="col-span-2 mx-auto lg:mx-0  mt-2">
            <p className=" mx-auto text-justify col-span-1 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="col-span-2 flex border-2 border-primary items-center rounded-2xl w-48  lg:mx-0  mt-4 py-4 px-4">
            <div className="px-4">
              <a
                href="#"
                className="lg:mx-0 text-xs md:text-lg lg:text-xl   text-primary   font-semibold  font-poppins "
              >
                learn more
              </a>
            </div>
            <div className="">{icon}</div>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <img className="object-fill w-full" src={Resources_1}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
