import Navbar from "../components/Capabilities/Navbar";
import Section1 from "../components/Resources/Section1";
import Section2 from '../components/Resources/Section2';
import Section3 from '../components/Resources/Section3';
import Footer from "../components/Capabilities/Footer";
import Section4 from '../components/Resources/Section4';
import Section5 from '../components/Resources/Section5';
import Section6 from '../components/Resources/Section6';


const Resources = () => {
  return (
    <div className="bg-col4">
        <Navbar/>
        <Section1/>
        {/* <Section3/>  */}
        <Section6/>
        <Section4/>
        <Section5/>
        <Section2/>
        <Footer/>
    </div>
  )
}

export default Resources