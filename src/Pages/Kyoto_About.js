import Navbar from '../components/Capabilities/Navbar';
import Header from '../components/About/Header';
import Section1 from '../components/About/Section1';
import Section2 from '../components/About/Section2';
import Section3 from '../components/About/Section3';
import Section4 from '../components/About/Section4';
import Section5 from '../components/Home/Section5';
import { Section7 } from '../components/Home';
import Footer from '../components/Capabilities/Footer';
const About = () => {
  return (
    <div className='bg-col4'>
        <Navbar/>
        <Header/>
        <Section1/>
        <Section5/>
        <Section2/>
        <Section3/>
        <Section7/>
        <Footer/>
    </div>
  )
};

export default About