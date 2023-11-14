import React from "react";
import Section3img from "../Reusable_Components/Section3img";
import Section from "../Reusable_Components/Section";
import { step11, step12, step13 } from "../../assets";
const Section2 = () => {
  return (
    <div>
     <Section title='OUR SOLUTION' head='Compliant and customisable carbon and ESG reporting' desc='
    ' py="py-0"
    button={null}
    />
      <Section3img
        title1="Step 1"
        img1={step11}
        desc1="Automate your data collection process with bulk upload capabilities and templates that help steer exactly what data is required to start your journey"
        title2="Step 2"
        img2={step12}
        desc2="Build a central source for carbon accounting data and avoid the mess of carbon data existing in silos across departments."
        title3="Step 3"
        img3={step13}
        desc3="Unify all your sustainability data in one digital and digestible format. Storing and searching for paper documents is a thing of the past."
      />
    </div>
  );
};

export default Section2;
