import React from "react";
import {cap_improve1 } from "../../assets";
import MainHeader from '../Reusable_Components/Header';
const Header = () => {
  return (
    <MainHeader img={cap_improve1} title='Improve your corporate sustainability strategy'
    desc='
    Make your company future-proof by improving and iterating on your decarbonisation strategy to reach net-zero.
    ' button='Book a demo '/>
  );
};

export default Header;