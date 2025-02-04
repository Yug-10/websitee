import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Gallary from "./Gallary.js";
import Footer from "./Footer";
import About1 from "./About1.js";
import Tb from "./Tb.js";
import Login from "./Login.js";
import Mt from "./Mt.js";
import Dominar from "./Dominar.js";
import Gixer from "./Gixer.js";
import Rs from "./Rs.js";
import RR from "./RR.js";
import CBR from "./CBR.js";
import R15 from "./R15.js";
import G310 from "./G310.js";
import Rs610 from "./Rs610.js";
import SPEED from "./SPEED.js";
import S1000 from "./S1000.js";
import Z900 from "./Z900.js";

// eslint-disable-next-line
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/About1" element={<About1 />} />
          <Route path="/Tb" element={<Tb />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MT" element={<Mt />} />
          <Route path="/Dominar" element={<Dominar />} />
          <Route path="/R15" element={<R15 />} />
          <Route path="/Gixer" element={<Gixer />} />
          <Route path="/Rs" element={<Rs />} />
          <Route path="/RR" element={<RR />} />
          <Route path="/CBR" element={<CBR />} />
          <Route path="/G310" element={<G310 />} />
          <Route path="/Rs610" element={<Rs610 />} />
          <Route path="/SPEEd" element={<SPEED />} />
          <Route path="/S1000" element={<S1000 />} />
          <Route path="/Z900" element={<Z900 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
