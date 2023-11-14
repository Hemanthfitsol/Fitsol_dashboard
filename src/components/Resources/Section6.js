import React, { useState } from 'react';

const Section6 = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex justify-around w-96 h-auto border-2 rounded-2xl mx-8">
      <h1
        className={`cursor-pointer ${
          activeItem === 1 ? 'rounded-2xl bg-primary' : 'border-1'
        } text-xl px-8 `}
        onClick={() => handleItemClick(1)}

      >
        New Resources
      </h1>
      <h1
        className={`cursor-pointer ${
          activeItem === 2 ? 'rounded-2xl bg-primary' : 'border-1'
        } text-xl px-8`}
        onClick={() => handleItemClick(2)}
      >
        Calculators
      </h1>
    </div>
  );
};

export default Section6;
