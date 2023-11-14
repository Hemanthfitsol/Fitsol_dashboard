import React, { useRef, useEffect, useState } from "react";
import { bgvideo } from "../assets"; // Replace with your video source
import Nav3 from "../components/Reusable_Components/Nav3";
import "./Kyoto.css";
import Dummy from '../Pages/Dummy';
const Kyoto = () => {
  const videoRef = useRef(null);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    videoRef.current.play();
    // Set a timeout to show the paragraph after a delay (adjust as needed)
    setTimeout(() => {
      setShowParagraph(true);
    }, 1000);
  }, []);

  return (
    <div className="relative z-24 flex-col items-center justify-center">
      {/* <Dummy/> */}
      <div>
      <Nav3 />
      </div>
      <div className="w-screen h-screen overflow-hidden  bg-primary relative">
        <div className="overflow-hidden  ml-36 h-3/5 lg:h-4/5 mx-auto mt-64 animate-expand md:mt-48 lg:mt-24 rounded-l-full relative">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover z-10"
          >
            <source src={bgvideo} type="video/mp4" />
          </video>
          {showParagraph && (
            <div className="paragraph-animation">
              {/* <p className="text-white absolute top-4 right-4 animate-slide">
                Your paragraph content here
              </p> */}
              <h1 className="text-white w-2/5 absolute top-40 text-right right-16 animate-slide lg:mx-0 text-2xl md:text-4xl lg:text-6xl font-extrabold text-heading font-serif ">
                One Stop Carbon Management Solution for Greener Logistics!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kyoto;
