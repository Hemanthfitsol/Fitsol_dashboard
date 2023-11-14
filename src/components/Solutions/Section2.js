import React from "react";
import Section3 from "./Section3";
import {
  Solutionsection1,
  Solutionsection2,
  Solutionsection3,
  Solutionsection4,
  Solutionsection5,
} from "../../constants/index";
const Slider = () => {
  return (
    <div className="container max-w-full bg-col2 px-8">
      <div className="container max-w-full grid grid-cols-4  bg-col2 mb-6">
        <h2 className="col-span-4 px-8 lg:col-span-3 lg:mx-0 tracking-[8px] text-xs md:text-sm lg:text-lg text-black font-poppins mb-1">
        PRODUCT AND SERVICE OVERVIEW
        </h2>
      </div>
      <div className="container px-8 max-w-full grid grid-cols-4 bg-white">
        <div className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></div>
        <div className="px-2 md:px-8 py-3 lg:text-left text-lg font-bold text-serif text-col5  tracking-wider">
          Essential
        </div>
        <div className="px-8 py-3 lg:text-left text-lg font-bold text-serif text-col5  tracking-wider">
          Pro
        </div>
        <div className="px-2 md:px-8 py-3 lg:text-left text-lg font-bold text-serif text-col5  tracking-wider">
          Enterprise
        </div>
      </div>
      <div className="px-8 py-6 text-primary">Data collection</div>
      {Solutionsection1.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-4  ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">
            {row.column1}
          </div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column2}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column3}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column4}</div>
        </div>
      ))}
      <div className="px-8 py-6 text-primary">Calculators</div>
      {Solutionsection2.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-4 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column1}</div>
          <div className="px-8 py-4 lg:mx-0 text-col7 whitespace-wrap">{row.column2}</div>
          <div className="px-8 py-4 lg:mx-0 text-col7 whitespace-wrap">{row.column3}</div>
          <div className="px-8 py-4 lg:mx-0 text-col7 whitespace-wrap">{row.column4}</div>
        </div>
      ))}
      <div className="px-8 py-6 text-primary">Reporting</div>
      {Solutionsection3.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-4  ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column1}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column2}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column3}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column4}</div>
        </div>
      ))}
      <div className="px-8 py-6 text-primary">Decarbonisation</div>
      {Solutionsection4.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-4   ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column1}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column2}</div>
          <div className="px-8 py-4 lg:mx-0 text-col7 whitespace-wrap">{row.column3}</div>
          <div className="px-8 py-4 lg:mx-0 text-col7 whitespace-wrap">{row.column4}</div>
        </div>
      ))}
      <div className="px-8 py-6 text-primary">Support</div>
      {Solutionsection5.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-4 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column1}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column2}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column3}</div>
          <div className="px-8 py-4 lg:mx-0 whitespace-wrap">{row.column4}</div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
