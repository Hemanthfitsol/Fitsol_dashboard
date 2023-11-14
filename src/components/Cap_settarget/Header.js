import React from "react";
import { cap_set1 } from "../../assets";
import {set_} from '../../assets';
import MainHeader from "../Reusable_Components/Header";
const Header = () => {
  return (
    <MainHeader
      img={cap_set1}
      title="Set decarbonisation targets"
      desc="
    Set science-based reduction targets for your company and entire value chain with the guidance of our carbon accounting experts. Book a demo
    "
      button="Book a demo"
    />
  );
};

export default Header;
