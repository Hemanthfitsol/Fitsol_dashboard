import React from "react";
import { Link } from 'react-router-dom';
import Foot from '../Reusable_Components/Footer';
const Footer = () => {
  return (
    
    // bg-primary-p-600 this need to be included in config. file of tailwind for customized color
      <Foot
      t11='FITSOL'
      t12='email@fitsol.com'
      t13='Jl, Tobanan Rya RT 003 Glagah Kidul, Tamanan, Bnaguntapan Bantul, DI
      Yogyakarta'


      t21='About Us'
      t22='What we offer'
      t23='Who we are'
      

      t31='Services'
      t32='Why choose us'
      t33='Our clients'

      t41='Contact Us'
      t42='Contact Us'

      t51={null}
      t52='Get quote'
      t53='Terms of Use'
      t54='Privacy Policy'
      />
  );
};

export default Footer;




