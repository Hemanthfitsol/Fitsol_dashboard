import React from "react";
import team1 from "../../assets/team1.png";
import team2 from '../../assets/team2.png';
import {about_11,about_2,about_4,about_21,about_22,about_23, about_24} from '../../assets';
const Section3 = () => {
  return (

    // border-primary border-2
    <div className="container max-w-full mx-auto grid grid-rows-2 gap-3 px-6 mb-8">
      <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className=" col-span-1 rounded-l mx-4 my-4">
          <div className="border-1">
            <img className="rounded-xl w-full mb-4" src={about_11}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
        <div className=" col-span-1 rounded-l mx-4 my-4">
          <div className="border-1 ">
            <img className="rounded-xl w-full mb-4" src={about_2}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
        <div className="col-span-1 rounded-l mx-4 my-4">
          <div className="border-1 ">
            <img className="rounded-xl w-full mb-4" src={team2}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
        <div className="col-span-1 mx-4 my-4">
          <div className="border-1 ">
            <img className="rounded-xl w-full mb-4" src={about_4}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
      </div>
      <div className="row-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className=" col-span-1 rounded-l mx-4 my-4">
          <div className="border-1 ">
            <img className="rounded-xl w-full mb-4" src={about_21}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
        <div className=" col-span-1 rounded-l mx-4 my-4">
          <div className="border-1">
            <img className="rounded-xl w-full mb-4" src={about_22}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
        <div className=" col-span-1 rounded-l mx-4 my-4">
          <div className="border-1">
            <img className="rounded-xl w-full mb-4" src={about_23}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
        <div className="col-span-1 rounded-l  mx-4 my-4">
          <div className="border-1">
            <img className="rounded-xl w-full mb-4" src={about_24}></img>
            <h1 className="font-bold text-xl">Name Surname</h1>
            <h2>Designation</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
