import React from 'react';
const Section3img = (props) => {
  return (
    <div className="container max-w-full grid grid-cols-3 gap-4 px-8 mb-8">
      <div className="card col-span-4 lg:text-start xs:col-span-4 lg:col-span-1  bg-white border-primary border-2 rounded-lg p-6">
        <h2 className="text-pothu  font-serif font-semibold text-lg ">
          {props.title1}
        </h2>
        <div>
            <img className='w-screen h-100'  src={props.img1}></img>
        </div>
        <p className="text-secondary font-poppins">
          {props.desc1}
        </p>
      </div>

      <div className="card col-span-4 shadow-curved lg:text-start xs:col-span-4 lg:col-span-1 bg-white border-primary border-2 rounded-lg p-6">
        <h2 className="text-pothu  font-serif font-semibold text-lg">
          {props.title2}
        </h2>
        <div >
            <img className='w-screen h-100'  src={props.img2}></img>
        </div>
        <p className="text-secondary font-poppins">
          {props.desc2}
        </p>
      </div>
      <div className="card col-span-4 lg:text-start xs:col-span-4 lg:col-span-1 bg-white border-primary border-2 rounded-lg p-6">
        <h2 className="text-pothu  font-serif font-semibold text-lg">
          {props.title3}
        </h2>
        <div  >
            <img className='w-screen h-100' src={props.img3}></img>
        </div>
        <p className="text-secondary text-base font-poppins">
          {props.desc3}
        </p>
      </div>
    </div>
  );
};

export default Section3img;
