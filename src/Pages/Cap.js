import Navbar from '../components/Capabilities/Navbar';
import Cap_2  from '../components/Capabilities/cap_2';
import Capabilities from '../components/Capabilities/Capabilities';
import Footer from '../components/Capabilities/Footer';
import Courses from '../components/Capabilities/Slider';
const Cap = () => {
  return (
    <div className='bg-col4'>
        <Navbar/>
        <Cap_2/>
        <Capabilities/>
        <Courses/>
        <Footer/>
    </div>
  )
}

export default Cap