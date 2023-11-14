import React from "react";
import '../scrollbar.css';
import Section1 from "../Reusable_Components/Section1";
import { Capcontent } from "../../constants";

const Slider = () => {
  return (
    <div className="flex overflow-x-auto scrollable">
      {Capcontent.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-11/12 p-4">
          <Section1 {...item} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
