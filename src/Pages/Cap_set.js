import Navbar from '../components/Capabilities/Navbar';
import Footer from '../components/Capabilities/Footer';
import Header from '../components/Cap_settarget/Header';
import Section1 from '../components/Cap_settarget/Section1';
import Section2 from '../components/Cap_settarget/Section2';
import Section3 from '../components/Cap_settarget/Section3';
const Cap_set = () => {
  return (
    <div className='bg-col4'>
        <Navbar/>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default Cap_set