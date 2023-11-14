import React, { useEffect, useState } from "react";

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="308"
    height="360"
    viewBox="0 0 308 382"
    fill="none"
  >
    <path
      opacity="0.3"
      d="M107.724 493.216C215.318 77.9728 81.1599 -95.8557 0.631463 -130.865L147.169 -193.023L355.696 -208.724L438.049 38.059L488.845 272.146C316.974 518.854 0.130009 908.459 107.724 493.216Z"
      fill="url(#paint0_linear_1751_1881)"
      fillOpacity="0.3"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1751_1881"
        x1="233.302"
        y1="-203.621"
        x2="269.699"
        y2="669.257"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9B9EE5" />
        <stop offset="1" stopColor="#CDCFF2" />
      </linearGradient>
    </defs>
  </svg>
);
const Section5 = () => {
  const [shipments, setShipments] = useState(1);
  const [co2Reductions, setCo2Reductions] = useState(1);
  const [clientele, setClientele] = useState(1);

  // Function to animate numbers from 1 to their final values
  const animateNumbers = (finalValue, setter, duration) => {
    const startTime = Date.now();
    const updateNumber = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        const nextValue = Math.ceil((finalValue * elapsedTime) / duration);
        setter(nextValue);
        requestAnimationFrame(updateNumber);
      } else {
        setter(finalValue);
      }
    };
    requestAnimationFrame(updateNumber);
  };

  useEffect(() => {
    animateNumbers(10000, setShipments, 1000); // Adjust the duration as needed
    animateNumbers(100, setCo2Reductions, 1000);
    animateNumbers(50, setClientele, 1000);
  }, []);

  return (
    <div className="container max-w-full grid grid-cols-3 gap-4 px-8 py-8  ">
      {/* <div className="absolute pl-40 pb-36">{icon}</div> */}
      <div className="relative card overflow-hidden col-span-4 lg:text-start xs:col-span-4 lg:col-span-1  bg-white border-primary border-2 rounded-lg ">
        <div className="absolute right-0 w-auto">{icon}</div>
        <div className="p-6">
          <h2 className="text-black tracking-[8px] font-poppins text-xs md:text-sm lg:text-lg mb-2">
            WHERE WE ARE AT
          </h2>
          <h4 className="text-heading text-xl font-serif font-extrabold mb-2">
            Shipments Done
          </h4>
          <div className="big-number font-serif text-black font-extrabold text-4xl md:text-5xl lg:text-7xl">
            {shipments}+
          </div>
          <p className="text-secondary text-base font-poppins mb-2">
            With over 10000 shipments successfully completed, we have proven
            expertise in delivering reliable and efficient logistics solutions.
          </p>
        </div>
      </div>

      <div className="relative card col-span-4 overflow-hidden lg:text-start xs:col-span-4 lg:col-span-1 bg-white border-primary border-2 rounded-lg ">
        <div className="absolute right-0 h-full w-auto ">{icon}</div>
        <div className="p-6">
          <h2 className="text-black tracking-[8px] font-poppins text-xs md:text-sm lg:text-lg mb-2">
            OUR IMPACT
          </h2>
          <h4 className="text-heading text-xl font-serif font-extrabold mb-2">
            tco2e reductions
          </h4>
          <div className="big-number font-serif text-black font-extrabold text-4xl md:text-5xl lg:text-7xl mb-2">
            {co2Reductions}+
          </div>
          <p className="text-secondary text-base font-poppins mb-2">
            Join us in our mission to make a significant impact on the
            environment, with over 100+ tons of CO2 reductions achieved through
            our sustainable solutions.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden card col-span-4 lg:text-start xs:col-span-4 lg:col-span-1 bg-white border-primary border-2 rounded-lg ">
        <div className="absolute right-0 h-full w-auto ">{icon}</div>
        <div className="p-6">
          <h2 className="text-black tracking-[8px] font-poppins text-xs md:text-sm lg:text-lg mb-2">
            OUR REACH
          </h2>
          <h4 className="text-heading text-xl font-serif font-extrabold mb-2">
            Clientele
          </h4>
          <div className="big-number font-serif text-black font-extrabold text-4xl md:text-5xl lg:text-7xl mb-2">
            {clientele}+
          </div>
          <h4 className="text-heading text-xl font-poppins font-semibold mb-2">
            per month
          </h4>
          <p className="text-secondary text-base font-poppins mb-2">
            FITSOL has successfully partnered with a diverse range of global
            clients, including leading corporations, small businesses, and
            organizations committed to environmental sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
