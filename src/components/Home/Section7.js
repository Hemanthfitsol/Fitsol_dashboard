import React from "react";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
} from "../../assets";
const Section7 = () => {
  return (
    <div id="ourclients"className="px-8 container max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-2 gap-4">
      <div className="col-span-1 md:col-span-1 sm:grid-cols-1 lg:col-span-1 2xl:col-span-1">
        <div className="container grid grid-cols-3 gap-2">
          <h2 className="col-span-3 lg:col-span-3 lg:mx-0 tracking-[8px] text-xs md:text-sm lg:text-lg text-black font-poppins mb-1">
            OUR AWESOME CLIENTS
          </h2>
          <h1 className="col-span-3 lg:col-span-3 lg:mx-0 text-2xl md:text-3xl xs:text-xl lg:text-5xl font-extrabold text-heading font-serif">
            We built solutions for other companies
          </h1>
          <div className="col-span-3 lg:col-span-3 lg:mx-0 underline w-16 h-1 bg-primary mt-2 mb-2"></div>
          <p className="col-span-3 lg:col-span-3 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 sm:grid-cols-1 lg:col-span-2 2xl:col-span-1">
        <div className="container max-w-full grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 ">
          <div className="col-span-1 row-span-1 border-2 border-gray bg-white">
          <img src={logo1} alt="Company Logo 1" />
            </div>
          <div className="col-span-1 row-span-1 border-2 border-gray bg-white">
          <img src={logo4} alt="Company Logo 4" />
            </div>
          <div className="col-span-1 row-span-1 border-2 border-gray bg-white">
          <img src={logo3} alt="Company Logo 3" />
            </div>
          <div className="col-span-1 row-span-1 border-solid border-2 border-gray bg-white">
          <img className="mx-auto my-6" src={logo2} alt="Company Logo 2" />
            </div>
          <div className="col-span-1 row-span-1 border-solid border-2 border-gray  bg-white">
          <img className="mx-auto my-6" src={logo5} alt="Company Logo 5" />
            </div>
          <div className="col-span-1 row-span-1 border-solid border-2 border-gray  bg-white">
          <img className="mx-auto my-6" src={logo6} alt="Company Logo 6" />
            </div>
          <div className="col-span-1 row-span-1 border-solid border-2 border-gray  bg-white">
          <img src={logo4} alt="Company Logo 4" />
            </div>
          <div className="col-span-1 row-span-1 border-solid border-2 border-gray  bg-white">
          <img className="mx-auto my-6" src={logo5} alt="Company Logo 5" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;

<div>
  <div class="md:row-span-2 md:col-span-2 grid md:grid-cols-4">
    
  </div>
  <div class="md:cols-span-1 border-solid border-2 border-black-300">
    <img src={logo2} alt="Company Logo 2" />
  </div>
  <div class="md:cols-span-1 border-solid border-2 border-black-300">
    <img src={logo3} alt="Company Logo 3" />
  </div>
  <div class="md:cols-span-1 border-solid border-2 border-black-300">
    <img src={logo4} alt="Company Logo 4" />
  </div>
  <div class="md:cols-span-1 border-solid border-2 border-black-300">
    <img src={logo5} alt="Company Logo 5" />
  </div>
  <div class="md:cols-span-1 border-solid border-2 border-black-300">
    <img src={logo6} alt="Company Logo 6" />
  </div>
  <div class="md:cols-span-1 border-solid border-2 border-black-300">
    <img src={logo7} alt="Company Logo 7" />
  </div>
  <div class="md:cols-span-1 border-solid border-2 border-black-300">
    <img src={logo8} alt="Company Logo 8" />
  </div>
</div>;
