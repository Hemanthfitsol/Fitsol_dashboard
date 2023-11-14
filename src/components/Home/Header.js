import React from "react";
import { header_img, trolley } from "../../assets";
import MainHeader from '../Reusable_Components/Header';
const Header = () => {
  return (
    <div>
      <MainHeader img={header_img} title='One Stop Carbon Management Solution for Greener Logistics!'
      desc='
      Fitsol leverages AI/ML to reduce logistics CO2e emissions by 20%1
              Customers could derive benefits like being carbon efficient and
              trade carbon credits Leverage smart and sustainable logistics
              solutions for their shipments
      ' button={null}/>
    </div>
  );
};

export default Header;


<div className="relative container mx-auto w-screen my-10">
      <img className="h-72 lg:h-auto"
        src={header_img} // Replace with the path to your image
        alt="Header Image"
      />
      <div className="absolute inset-0  text-white">
        <div className="container mx-auto grid grid-cols-4 gap-2 px-8 py-8">
          <h1 className="col-span-4 mx-auto lg:col-span-3 lg:mx-0 text-2xl md:text-4xl lg:text-5xl font-extrabold text-heading font-serif ">
            One Stop Carbon Management Solution for Greener Logistics!
          </h1>
          <div className="col-span-4 mx-auto lg:col-span-3 lg:mx-0 underline w-16 h-1 bg-white mt-2 mb-2"></div>
          <p className="col-span-4 text-justify mx-auto lg:col-span-3 lg:mx-0 text-base md:text-lg lg:text-xl text-secondary font-poppins">
            Fitsol leverages AI/ML to reduce logistics CO2e emissions by 20%1
            Customers could derive benefits like being carbon efficient and
            trade carbon credits Leverage smart and sustainable logistics
            solutions for their shipments
          </p>
        </div>
      </div>
    </div>