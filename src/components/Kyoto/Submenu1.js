import React from "react";
import { contentList1 } from "../../constants";
const ContentItem = ({ title, description }) => (
    <div className="py-2 px-2">
      <h1 className="font-poppins font-semibold">{title}</h1>
      <p className="font-poppins text-pothu">{description}</p>
    </div>
  );
const Submenu1 = () => {
  return (
    <div className="relative container w-[500px] grid grid-cols-1 z-4 left-3/4 ml-20 transform  -translate-x-1/2  bg-white p-2 rounded-2xl">
      <div className="col-span-1 " >
      {contentList1.map((content, index) => (
        <ContentItem key={index} {...content} />
      ))}
    </div>
    </div>
  );
};

export default Submenu1;
