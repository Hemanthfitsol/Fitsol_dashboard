import React from "react";
import Fot from '../Reusable_Components/Footer';
const Footer = () => {
  return (
    
    // bg-primary-p-600 this need to be included in config. file of tailwind for customized color
      <Fot
      t11='KYOTO'
      t12='email@kyoto.com'
      t13='Jl, Tobanan Rya RT 003 Glagah Kidul, Tamanan, Bnaguntapan Bantul, DI
      Yogyakarta'


      t21='Capabilities'
      t22='Product overview'
      t23='Collect data'
      t24='Measure emissions'
      t25='Report on ESG'
      t26='Set targets'
      t27='Reduce Carbon'

      t31='Solutions'
      t32='Offerings'
      t33='Case studies'

      t41='About'
      t42='Overview'
      t43='Our mission'
      t44='Our vision'
      t45='Contact'

      t51='Resources'
      t52={null}
      t53='All articals'
      t54='Calculators'
      />
  );
};

export default Footer;




