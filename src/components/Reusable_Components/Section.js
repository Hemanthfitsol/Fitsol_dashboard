import React from "react";
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
      fill="#62C941"
    />
  </svg>
);
const Section = (props) => {
  return (
    <div className="container  max-w-full grid grid-cols-3 gap-2 px-8 py-8">
      <h2 className="col-span-3 lg:col-span-2 lg:mx-0 tracking-[8px]  text-lg text-col9 font-poppins mb-1">
        {props.title}
      </h2>
      <h1 className="col-span-3  lg:col-span-2 text-4xl lg:text-6xl font-extrabold text-heading font-serif">
        {props.head}
      </h1>
      <div className="col-span-3 lg:col-span-2 lg:mx-0 underline w-16 h-1 bg-primary mt-2 mb-2"></div>
      {props.desc !== null && (
        <div className="col-span-3 lg:mx-0  lg:col-span-2 mt-2">
          <p
            style={{ wordSpacing: "2px" }}
            className="col-span-3 lg:col-span-2 lg:mx-0 md:text-lg lg:text-xl text-col9 font-poppins"
          >
            {props.desc}
          </p>
        </div>
      )}
      {props.button !== null && (
        <div className="col-span-3 lg:col-span-2 lg:mx-0 mt-4 flex items-center ">
          <div className="py-4 flex items-center bg-primary rounded-2xl px-4">
            <div>
              <a
                href="#"
                className="lg:mx-0 text-xs md:text-lg lg:text-xl  px-4   text-hemanth  font-semibold  font-poppins "
              >
                {props.button}
              </a>
            </div>
            <div className="pt-1">{icon}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;
