import React from "react";
const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_1702_3156)">
      <path
        d="M8 16.59L12.58 12L8 7.41L9.41 6L15.41 12L9.41 18L8 16.59Z"
        fill="#62C941"
      />
    </g>
    <defs>
      <clipPath id="clip0_1702_3156">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Header = (props) => {
  return (
    // px-8 and py-8 makes equal to the line gap which all other components are using
    <div className="container max-w-full mt-32 my-10">
      <div className="container max-w-full grid grid-cols-4">
        <img
          className="col-span-4 w-full object-cover h-80 "
          src={props.img} // Replace with the path to your image
          alt="Header Image"
        />
      </div>
      <div className="absolute inset-0 mt-28  text-white">
        <div className="container max-w-full grid  grid-cols-4  gap-2 my-6 px-8 py-8">
          <h1 className="col-span-4  lg:col-span-3 lg:mx-0 text-2xl md:text-4xl lg:text-5xl font-extrabold text-heading font-serif ">
            {props.title}
          </h1>
          <div className="col-span-4  lg:col-span-3 lg:mx-0 underline w-16 h-1 bg-white mt-2 mb-2"></div>
          <p className="col-span-4  lg:col-span-3 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
            {props.desc}
          </p>
          {/* <div className="col-span-4 lg:mx-0  lg:col-span-3 mt-4"> */}
          {props.button !== null && (
            <div className="col-span-4 lg:col-span-2 mt-4 flex items-center ">
              <div className="py-4 flex items-center bg-primary rounded-2xl px-4">
                <div>
                  <a
                    href="#"
                    className="lg:mx-0 text-xs md:text-lg lg:text-xl  px-4   text-hemanth  font-semibold  font-poppins "
                  >
                    {props.button}
                  </a>
                </div>
                <div className="">{icon}</div>
              </div>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

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
</div>;
