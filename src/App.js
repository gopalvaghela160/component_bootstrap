import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// owl-carousal
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// exports files
import Menubar from './Globalcomponent/Menubar/Menubar.js';
import Footer from './Globalcomponent/footer/Footer';
// pages
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import Services from './pages/Serivces.js';
import Projects from './pages/Projects.js';
import Clientss from './pages/Clientss';
// react router files
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Menubar></Menubar>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Clients" element={<Clientss />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;
