import React from "react";
const Section2 = (props) => {
  return (
    // xl:grid-cols-2 xl:col-span-1
    <div className="px-8 py-8 container max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-2  gap-6">
      <div className="col-span-1 md:col-span-1 sm:grid-cols-1 lg:col-span-2 2xl:col-span-1">
        <div className="box2">
          <img src={props.img} alt="" className="w-screen object-fill h-auto" />
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 sm:grid-cols-1 lg:col-span-1 2xl:col-span-1">
        <div className="container grid grid-cols-4 gap-2">
          <h2 className="col-span-4 lg:col-span-4 lg:mx-0 tracking-[8px] text-xs md:text-sm lg:text-lg text-black font-poppins mb-1">
            {props.title}
          </h2>
          <h1 className="col-span-4 lg:col-span-4 lg:mx-0 text-2xl md:text-3xl xs:text-xl lg:text-5xl font-extrabold text-heading font-serif">
            {props.head}
          </h1>
          <div className="col-span-4 lg:col-span-4 lg:mx-0 underline w-16 h-1 bg-primary mt-2 mb-2"></div>
          <p className="col-span-4 lg:text-start lg:col-span-4 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
            {props.desc}
          </p>
          <p className="col-span-4 lg:col-span-3 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
            Reducing Carbon Emissions
          </p>
          <p className="col-span-4 lg:col-span-3 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
            Optimizing Supply Chain Process
          </p>
          <p className="col-span-4 lg:col-span-3 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
            Creating Customized Sustainable Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;

