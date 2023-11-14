import React from "react";
import { cap_set1 } from "../../assets";
import MainHeader from "../Reusable_Components/Header";
const Header = () => {
  return (
    <MainHeader
      img={cap_set1}
      title="Case study banner"
      desc="
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia."
      button="Book a demo >"
    />
  );
};

export default Header;
