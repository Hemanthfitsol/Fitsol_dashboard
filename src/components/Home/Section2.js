import React from "react";
import { trolley } from "../../assets";
import Sectionimg from "../Reusable_Components/Sectionimg";
const Section2 = () => {
  return (
    <div id="whoarewe">
      <Sectionimg
        title="WHO ARE WE"
        head="Welcome to your Trusted Transport Company!"
        desc="
      Transforming the Transportation Industry To Create a Cleaner,
              Greener and More Efficient Future"
        img={trolley}
      />
    </div>
  );
};

export default Section2;
