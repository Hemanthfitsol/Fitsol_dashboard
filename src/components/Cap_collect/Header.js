import React from "react";
import { cap_collect1 } from "../../assets";
import MainHeader from "../Reusable_Components/Header";
const Header = () => {
  return (
    <MainHeader
      img={cap_collect1}
      title="Collect emission data"
      desc="
    Data collection does not need to be tedious. Consolidate your data in one secure platform and gain immediate visibility on your company’s carbon footprint. Start collecting data
    "
      button="Start data collection"
    />
  );
};
export default Header;
