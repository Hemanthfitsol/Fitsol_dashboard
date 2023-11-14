import React from "react";
import { cap_sust1 } from "../../assets";
import MainHeader from "../Reusable_Components/Header";
const Header = () => {
  return (
    <MainHeader
      img={cap_sust1}
      title="Report on your environmental impact"
      desc="
    Share your progress with reports compliant to international regulations and protocol. Easily customise the reporting tool to suit your specific business and export to internal and external stakeholders.
    "
      button="Start reporting on ESG"
    />
  );
};
export default Header;
