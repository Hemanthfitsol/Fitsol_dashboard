import React from "react";
const Section12 = () => {
  const tick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.50091 13.5001L4.58424 10.5834C4.25924 10.2584 3.74258 10.2584 3.41758 10.5834C3.09258 10.9084 3.09258 11.4251 3.41758 11.7501L6.90924 15.2418C7.23424 15.5668 7.75924 15.5668 8.08424 15.2418L16.9176 6.41676C17.2426 6.09176 17.2426 5.5751 16.9176 5.2501C16.5926 4.9251 16.0759 4.9251 15.7509 5.2501L7.50091 13.5001Z"
        fill="#059669"
      />
    </svg>
  );
  return (
    <div className="container max-w-full grid grid-cols-3 gap-4 px-8 py-8 ">
      <div className="card col-span-4 xs:col-span-4 lg:col-span-1  bg-white border-primary border-2 rounded-lg p-6">
        <h2 className="text-black font-extrabold font-poppins text-xs md:text-sm lg:text-lg mb-2 ">
          Essential
        </h2>
        <p className="text-secondary text-base font-poppins mb-2">
          A no-hassle start to your sustainability journey. Consolidate your
          emissions data, measure your carbon footprint, report on your
          progress, and reduce your carbon emissions seamlessly.
        </p>
        <div className="flex">
          <h1 className="pr-2 text-heading text-3xl font-serif font-extrabold">
        ₹1300
          </h1>
          <h5 className="my-2">per month</h5>
        </div>
        <div className="col-span-4 lg:col-span-3 lg:mx-0 underline w-auto h-0.5 bg-black mt-2 mb-2"></div>
        <div className="grid grid-rows-4">
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Automated Data collection</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Carbon emissions calculator</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Decarbonisation action plan</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Annual reporting</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">
              Communication & customer service report
            </p>
          </div>
        </div>
      </div>

      <div className="card col-span-4 shadow-curved lg:text-start xs:col-span-4 lg:col-span-1 bg-white border-primary border-2 rounded-lg p-6">
        <h2 className="text-black font-extrabold font-poppins text-xs md:text-sm lg:text-lg mb-2">
          Pro
        </h2>
        <p className="text-secondary text-base font-poppins mb-2">
          Streamline your company’s carbon and ESG reporting across multiple
          facilities, gain access to innovative decarbonisation levers, and
          build a coherent sustainability strategy.
        </p>
        <div className="flex">
          <h1 className="pr-2 text-heading text-3xl font-serif font-extrabold">
          ₹2300
          </h1>
          <h5 className="my-2">per month</h5>
        </div>
        <div className="col-span-4 mx-auto lg:col-span-3 lg:mx-0 underline w-auto h-0.5 bg-black mt-2 mb-2"></div>
        <div className="grid grid-rows-4">
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">All Essential plan features</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Multi facilities management</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Customisable reporting</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">
              Personalised decarbonisation action plan
            </p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Compensation portfolio</p>
          </div>
        </div>
      </div>

      <div className="card col-span-4 lg:text-start xs:col-span-4 lg:col-span-1 bg-white border-primary border-2 rounded-lg p-6">
        <h2 className="text-black font-extrabold font-poppins text-xs md:text-sm lg:text-lg mb-2">
          Enterprise
        </h2>
        <p className="text-secondary font-poppins mb-2">
          Customised support and consultation along your journey. Personalised
          decarbonisation strategy and regulatory-compliant ESG reporting for
          your portfolio, business units or subsidiaries.
        </p>
        <div className="flex">
          <h1 className="pr-2 text-heading text-3xl font-serif font-extrabold">
          ₹4500
          </h1>
          <h5 className="my-2">per month</h5>
        </div>
        <div className="col-span-4 lg:col-span-3 lg:mx-0 underline w-auto h-0.5 bg-black mt-2 mb-2"></div>
        <div className="grid grid-rows-4">
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">All Pro plan features</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">API Integration</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">Custom emissions calculation</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">ESG Management module</p>
          </div>
          <div className="row-span-1 grid grid-cols-12 font-poppins text-black text-lg md:text-lg lg:text-lg">
            <p className="col-span-1 my-1">{tick}</p>
            <p className="col-span-11">
            Regulatory compliant reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section12;
