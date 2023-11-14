import React from "react";
import { cap_collect1 } from "../../assets";
import MainHeader from "../Reusable_Components/Header";
const Header = () => {
  return (
    <div className=''>
          <MainHeader
            img={cap_collect1}
            title="Facilitate the sustainable transition of the global economy"
            desc="
            Fitsol's vision is to pave the way for a sustainable logistics industry. We aspire to be the driving force behind a cleaner, greener world by reducing 1 billion tons of CO2 emissions across logistics.
          "
            button="Start collecting data"
          />
    </div>
  );
};
export default Header;
