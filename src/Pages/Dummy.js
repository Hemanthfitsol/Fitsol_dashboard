import React, { useRef, useEffect, useState } from "react";
import { bgvideo } from "../assets";
import Nav3 from "../components/Reusable_Components/Nav3";
import KyotoHome1 from "./KyotoHome1"; // Import KyotoHome1 component

const Home = () => {
  const videoRef = useRef(null);
  const [showKyotoHome1, setShowKyotoHome1] = useState(false);

  useEffect(() => {
    // Check if videoRef.current is not null before calling play
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const handleSvgClick = () => {
    // Toggle the visibility of KyotoHome1 with a shorter delay
    setTimeout(() => {
      setShowKyotoHome1(!showKyotoHome1);
    }, 0.1);
  };

  return (
    <div className="z-2">
      <Nav3 />
      {!showKyotoHome1 ? (
        <div className="relative max-w-full h-screen bg-primary">
          <div className="absolute inset-0 my-20 mx-auto z-1 overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full xl:px-[540px] py-[48px] object-cover"
              autoPlay
              loop
              muted
            >
              <source src={bgvideo} type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 z-2 mx-auto my-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover"
              viewBox="0 0 492 521"
              style={{ imageRendering: "pixelated" }}
              onClick={handleSvgClick}
            >
              <mask id="mask">
               <rect fill="white" width="100%" height="100%" fill-opacity="1" />
               <path
                 d="M9.63697 191.331L9.63607 191.334C3.54491 213.443 0.5 236.452 0.5 260.36C0.5 295.998 7.37994 329.612 21.1418 361.196L21.1435 361.2C35.1308 392.559 55.0968 420.082 81.0373 443.766L81.0391 443.768C106.983 467.23 138.446 485.835 175.421 499.588L175.424 499.589C212.635 513.12 254.345 519.881 300.547 519.881C320.38 519.881 339.314 518.642 357.35 516.162C375.38 513.683 392.286 510.302 408.069 506.018L408.075 506.016C423.851 501.509 438.504 496.437 452.032 490.8C465.559 485.164 477.85 479.075 488.905 472.533L489.309 472.293L489.095 471.875L460.052 415.14L459.83 414.705L459.39 414.917C445.916 421.429 431.091 426.709 414.912 430.754C398.74 434.572 382.569 436.481 366.4 436.481C343.499 436.481 322.178 432.328 302.433 424.026C282.909 415.498 265.968 403.606 251.608 388.348C237.473 372.866 226.361 354.35 218.277 332.793C210.196 311.018 206.151 286.763 206.151 260.022C206.151 233.055 210.196 208.801 218.277 187.253C226.586 165.469 237.922 146.954 252.281 131.698C266.641 116.44 283.693 104.66 303.442 96.3568C323.188 88.0545 344.623 83.9007 367.751 83.9007C385.045 83.9007 401.661 86.0343 417.602 90.3002L417.61 90.3022C433.793 94.348 448.169 99.403 460.741 105.464L461.181 105.676L461.403 105.242L490.446 48.5069L490.664 48.0819L490.249 47.845C479.197 41.5294 466.796 35.5546 453.047 29.9198C439.516 24.0565 424.748 18.9841 408.746 14.7016C392.737 10.1923 375.605 6.69854 357.349 4.21938C339.314 1.73953 320.38 0.5 300.547 0.5C269.67 0.5 240.814 3.65526 213.981 9.96867C187.154 16.0555 162.576 24.7362 140.248 36.013L140.246 36.0139C118.145 47.2899 98.4085 60.8231 81.0381 76.6143C63.6698 92.4037 49.0058 109.887 37.0482 129.064C25.0903 148.242 15.9533 168.998 9.63697 191.331Z"
                stroke="#1A1C3C"
              />
           </mask>
              {/* <mask id="mask">
              </mask> */}
              <rect mask="url(#mask)" fill="#060DBF" width="100%" height="100%" />
            </svg>
          </div>
        </div>
      ) : (
        <KyotoHome1 />
      )}
    </div>
  );
};

export default Home;




// import { bgvideo } from "../assets";
// import Nav3 from "../components/Reusable_Components/Nav3";
// import KyotoHome1 from "./KyotoHome1";

// import { useEffect, useRef } from "react";

// const Home = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     videoRef.current.play();
//   }, []);
//   return (
//     <div>
//       <Nav3 />
//       <div className="relative max-w-full h-screen bg-primary">
//         <div className="absolute inset-0 my-20 mx-auto z-10 overflow-hidden">
//           <video
//             ref={videoRef}
//             className="w-full h-full xl:px-[540px] py-[48px] object-cover"
//             autoPlay
//             loop
//             muted
//           >
//             <source src={bgvideo} type="video/mp4" />
//           </video>
//         </div>
//         <div className="absolute inset-0  z-20 mx-auto my-32">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-full object-cover"
//             viewBox="0 0 492 521"
//             style={{ imageRendering: "pixelated" }}
//           >
//             <mask id="mask">
//               <rect fill="white" width="100%" height="100%" fill-opacity="1" />
//               <path
//                 d="M9.63697 191.331L9.63607 191.334C3.54491 213.443 0.5 236.452 0.5 260.36C0.5 295.998 7.37994 329.612 21.1418 361.196L21.1435 361.2C35.1308 392.559 55.0968 420.082 81.0373 443.766L81.0391 443.768C106.983 467.23 138.446 485.835 175.421 499.588L175.424 499.589C212.635 513.12 254.345 519.881 300.547 519.881C320.38 519.881 339.314 518.642 357.35 516.162C375.38 513.683 392.286 510.302 408.069 506.018L408.075 506.016C423.851 501.509 438.504 496.437 452.032 490.8C465.559 485.164 477.85 479.075 488.905 472.533L489.309 472.293L489.095 471.875L460.052 415.14L459.83 414.705L459.39 414.917C445.916 421.429 431.091 426.709 414.912 430.754C398.74 434.572 382.569 436.481 366.4 436.481C343.499 436.481 322.178 432.328 302.433 424.026C282.909 415.498 265.968 403.606 251.608 388.348C237.473 372.866 226.361 354.35 218.277 332.793C210.196 311.018 206.151 286.763 206.151 260.022C206.151 233.055 210.196 208.801 218.277 187.253C226.586 165.469 237.922 146.954 252.281 131.698C266.641 116.44 283.693 104.66 303.442 96.3568C323.188 88.0545 344.623 83.9007 367.751 83.9007C385.045 83.9007 401.661 86.0343 417.602 90.3002L417.61 90.3022C433.793 94.348 448.169 99.403 460.741 105.464L461.181 105.676L461.403 105.242L490.446 48.5069L490.664 48.0819L490.249 47.845C479.197 41.5294 466.796 35.5546 453.047 29.9198C439.516 24.0565 424.748 18.9841 408.746 14.7016C392.737 10.1923 375.605 6.69854 357.349 4.21938C339.314 1.73953 320.38 0.5 300.547 0.5C269.67 0.5 240.814 3.65526 213.981 9.96867C187.154 16.0555 162.576 24.7362 140.248 36.013L140.246 36.0139C118.145 47.2899 98.4085 60.8231 81.0381 76.6143C63.6698 92.4037 49.0058 109.887 37.0482 129.064C25.0903 148.242 15.9533 168.998 9.63697 191.331Z"
//                 stroke="#1A1C3C"
//               />
//             </mask>
//             <rect mask="url(#mask)" fill="#060DBF" width="100%" height="100%" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
