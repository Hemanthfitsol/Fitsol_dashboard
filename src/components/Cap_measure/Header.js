import React from "react";
import { cap_measure1 } from "../../assets";
import MainHeader from "../Reusable_Components/Header";
const Header = () => {
  return (
    <MainHeader
      img={cap_measure1}
      title="Measure carbon footprint"
      desc="Calculate your carbon footprint and visualise it in an easy-to-navigate and customisable dashboard. Our certified methodology means you can explore your data and make informed decisions with confidence.
    "
      button="Start measuring emissions"
    />
  );
};
export default Header;