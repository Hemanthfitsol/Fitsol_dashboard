import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

const Slider = () => {

  return (
    <div className="container mx-auto my-4">
      <div className="owl-carousel owl-theme">
        <div className="item">
          <p className="h-96 overflow-y-auto">
            {/* Your first paragraph content here */}
          </p>
        </div>
        <div className="item">
          <p className="h-96 overflow-y-auto">
            {/* Your second paragraph content here */}
          </p>
        </div>
        <div className="item">
          <p className="h-96 overflow-y-auto">
            {/* Your third paragraph content here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
