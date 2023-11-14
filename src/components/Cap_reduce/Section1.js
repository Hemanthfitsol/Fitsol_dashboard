import React from "react";
import { cap_reduce2 } from "../../assets";
import Sectionimg from "../Reusable_Components/Sectionimg";
const Section2 = () => {
  return (
    <Sectionimg
      title="INTRODUCTION"
      head="Climate actions speak louder than words"
      desc="Reducing emissions is about translating climate targets and net-zero pledges into concrete actions. Making pledges is not enough so it is important to act on decarbonisation targets to demonstrate a credible sustainable commitment to your shareholders, stakeholders and the rest of the world.

    Plan A provides hundreds of unique action cards tailored to reducing your company's emission hotspots. You don't need to guess on how to take action, we provide all the insights for you to reach your targets."
      img={cap_reduce2}
    />
  );
};
export default Section2;
