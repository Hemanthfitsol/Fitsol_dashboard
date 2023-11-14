import React from "react";
import { cap_collect2 } from "../../assets";
import Sectionimg from "../Reusable_Components/Sectionimg";
const Section2 = () => {
  return (
    <Sectionimg
      title="INTRODUCTION"
      head="Where it all begins: Uncover your carbon & ESG data"
      desc="
    Collecting emissions data is a necessary first step to your net-zero journey. The data collection phase is defined by sourcing data required for carbon accounting and ESG reporting, which means coordinating data from various departments and stakeholders. This can include everything from employee commute information, building electricity use, and weight of waste produced in your business’ office.The Plan A Sustainability Platform consolidates all your data in one customisable and visual dashboard, enabling you to bulk upload data, and utilise templates that guide you through the data collection process with ease."
      img={cap_collect2}
    />
  );
};
export default Section2;
