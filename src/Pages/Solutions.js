import Navbar from '../components/Capabilities/Navbar';
import Footer from '../components/Capabilities/Footer';
import Section1 from '../components/Solutions/Section1';
import Section12 from '../components/Solutions/Section12';
import Section2 from '../components/Solutions/Section2';
import Section3 from '../components/Solutions/Section3';
import Section6 from '../components/Solutions/Section6';

const Solutions = () => {
  return (
    <div className='bg-col4'>
        <Navbar/>
        <Section1/>
        <Section12/>
        <Section2/>
        <Section6/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default Solutions