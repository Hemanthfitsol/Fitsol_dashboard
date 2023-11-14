import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy_terms/Privacy";
import Terms from "./components/Privacy_terms/Terms";
import Home from "./Pages/Home";
import Kyoto from './Pages/Dummy';
import Cap from  './Pages/Cap';
import Cap_collect from "./Pages/Cap_collect";
import Cap_improve from "./Pages/Cap_improve";
import Cap_measure from "./Pages/Cap_measure";
import Cap_reduce from "./Pages/Cap_reduce";
import Cap_set from "./Pages/Cap_set";
import Cap_sust from "./Pages/Cap_sust";
import Solutions from "./Pages/Solutions";
import Casestudy from "./Pages/Casestudy";
import About from "./Pages/Kyoto_About";
import Resources from "./Pages/Resources";
import KyotoHome1 from "./Pages/KyotoHome1";
import Dummy from './Pages/Dummy';
function App() {
  return (
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/kyoto" element={<KyotoHome1/>} />
          <Route exact path="/kyoto1" element={<Dummy/>} />
          <Route exact path="/cap" element={<Cap />} />
          <Route exact path='/collect' element={<Cap_collect/>}/>
          <Route exact path='/measure' element={<Cap_measure/>}/>
          <Route exact path='/reduce' element={<Cap_reduce/>}/>
          <Route exact path='/improve' element={<Cap_improve/>}/>
          <Route exact path='/sustain' element={<Cap_sust/>}/>
          <Route exact path='/set' element={<Cap_set/>}/>
          <Route exact path='/solution' element={<Solutions/>}/>
          <Route exact path='/casestudy' element={<Casestudy/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/resources' element={<Resources/>}/>
      </Routes>
  );
}
export default App;
