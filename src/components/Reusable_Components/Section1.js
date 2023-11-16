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
const Section = (props) => {
  return (
    <div className="flex-col w-full flex-shrink gap-2 px-4 py-8">
      <div className="">
        <h2 className="lg:mx-0 h-auto tracking-[8px] text-xs md:text-sm lg:text-lg text-col9 font-poppins mb-2">
          {props.title}
        </h2>
      </div>
      <div className="">
        <h1 className="lg:mx-0 text-2xl text-col10 md:text-4xl lg:text-5xl font-extrabold text-heading font-serif py-4">
          {props.head}
        </h1>
      </div>
      <div className="lg:mx-0 underline h-0.5 bg-pothu mt-2 "></div>
      {props.desc !== null && (
        <div className="container lg:h-20">
          <div className="lg:mx-0 mt-2">
            <p className="lg:col-span-2 lg:mx-0 md:text-lg lg:text-xl text-col9 font-poppins">
              {props.desc}
            </p>
          </div>
        </div>
      )}
      {props.button !== null && (
        <div className="container grid grid-cols-3">
          <div className="lg:mx-0 col-span-3 md:col-span-3 lg:col-span-2  mt-2 flex items-center">
            <div className="py-4 flex bg-primary rounded-2xl lg:px-4">
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
        </div>
      )}
    </div>
  );
};

export default Section;
