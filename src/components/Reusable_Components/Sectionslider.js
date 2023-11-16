import React from "react";
import "../scrollbar.css";
const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_1702_3076)">
      <path
        d="M8 16.59L12.58 12L8 7.41L9.41 6L15.41 12L9.41 18L8 16.59Z"
        fill="#62C941"
      />
    </g>
    <defs>
      <clipPath id="clip0_1702_3076">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Section3 = (props) => {
  return (
    // bg-primary-p-600 need to add this in config file
    // relative top-0
    <section className="max-w-full ">
      <div className="px-8 py-8 container max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-1 sm:grid-cols-1 lg:col-span-1 2xl:col-span-1">
          <div className="container grid grid-cols-4 gap-2">
            <h2 className="col-span-4 lg:col-span-4 lg:mx-0 tracking-[8px] lg:text-lg text-black font-poppins mb-1">
              {props.title}
            </h2>
            <h1 className="col-span-4 lg:col-span-4 lg:mx-0 text-4xl lg:text-5xl font-extrabold text-heading font-serif">
              {props.head}
            </h1>
            <div className="col-span-4 lg:col-span-4 lg:mx-0 underline w-16 h-1 bg-primary mt-2 mb-2"></div>
            <p className="col-span-4 lg:col-span-4 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
              {props.desc}
            </p>
            {/* <div className="col-span-4 lg:mx-0  lg:col-span-4 mt-2"> */}
              {props.button !== null && (
                <div className="col-span-4 mr-20 lg:col-span-4 flex items-center justify-center bg-primary px-4 rounded-2xl">
                  <div className="py-3 ">
                    <a
                      href="#"
                      className="col-span-4 lg:mx-0 text-xs md:text-lg lg:text-xl  px-4   text-hemanth  rounded-2xl font-semibold  font-poppins "
                    >
                      {props.button}
                    </a>
                  </div>
                  <div className="">{icon}</div>
                </div>
              )}
            </div>
          {/* </div> */}
        </div>
        <div className="col-span-1 md:col-span-1 sm:grid-cols-1 lg:col-span-2 2xl:col-span-1">
          <div className="box2">
            <div
              className="scrollable lg:text-start max-h-96 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
              }}
            >
              {/* <div className="scrollable max-h-96 overflow-y-auto"> */}
              <div className="content mb-6">
                <h5 className="text-black text-2xl font-serif font-semibold">
                  01
                </h5>
                <h3 className="text-black text-2xl font-serif font-bold mt-2">
                  Carbon Emissions Tracking
                </h3>
                <p className="text-black  text-base font-poppins font-normal">
                  AI-driven software solution for efficient tracking and
                  reduction of carbon emission in logistics
                </p>
              </div>
              <div className="content mb-6">
                <h5 className="text-black text-2xl font-serif font-semibold">
                  02
                </h5>
                <h3 className="text-black text-2xl font-serif font-bold mt-2">
                  Sustainable Packaging
                </h3>
                <p className="text-black  text-base font-poppins font-normal">
                  Green packaging solution with reusable materials and recycling
                  options
                </p>
              </div>
              <div className="content mb-6">
                <h5 className="text-black text-2xl font-serif font-semibold">
                  03
                </h5>
                <h3 className="text-black text-2xl font-serif font-bold mt-2">
                  Eco-Friendly Transportation
                </h3>
                <p className="text-black  text-base font-poppins font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, harum!
                </p>
              </div>
              <div className="content mb-6">
                <h5 className="text-black text-2xl font-serif font-semibold">
                  04
                </h5>
                <h3 className="text-black text-2xl font-serif font-bold mt-2">
                  Metoxide Emissions Tracking
                </h3>
                <p className="text-black  text-base font-poppins font-normal">
                  AI-driven software solution for efficient tracking and
                  reduction osolution for efficient tracking and reduction of
                  carbon emission in logistics
                </p>
              </div>
              <div className="content">
                <h5 className="text-black text-2xl font-serif font-semibold">
                  05
                </h5>
                <h3 className="text-black text-2xl font-serif font-bold mt-2">
                  Metoxide Emissions Tracking
                </h3>
                <p className="text-black   text-base font-poppins font-normal">
                  AI-driven software solution for efficient tracking and
                  reduction of carbon emission in logistics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
