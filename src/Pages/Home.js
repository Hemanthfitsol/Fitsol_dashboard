import {
    Navbar1,
    Header,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Contact,
    Footer,
  } from "../components/Home";
  
  const Home = () => {
    return (
      <div className='bg-col4'>
        <Navbar1 />
        <Header />
        <Section1 />
        <Section6 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section7 />
        <Contact/>
        <Footer />
      </div>
    );
  };
  
  export default Home;
  
