import React from 'react'
import "./tb.css";
import img from "./Assets/tb1.jpg";
import img1 from "./Assets/tb2.jpg";
import img2 from "./Assets/tb3.jpg";
import img3 from "./Assets/tb4.jpg";
import img4 from "./Assets/tb5.jpg";
import img5 from "./Assets/tb6.jpg";
import img6 from "./Assets/tb7.jpg";
import img7 from "./Assets/tb8.jpg";
import img8 from "./Assets/tb9.jpg";
import img9 from "./Assets/tb10.jpg";
import img10 from "./Assets/tb11.jpg";
import img11 from "./Assets/tb12.jpg";
import { useNavigate } from 'react-router-dom';


function Tb() {
  const navigate1 = useNavigate();
  return (
    <div>
      <div className="container">
      <h1>Adventure BIKE</h1>
      <div className="bike">
        <img src={img} alt="first" />
        <p>Company: Royal Enfield</p>
        <p>bike name:Himalayan 450<br />price:₹ 3,43,493</p>  
        <button onClick={() => navigate1("/Mt")}>Know more</button>
    
        
      </div>

      <div className="bike">
        <img src={img1} alt="second" />
        <p>Company:Hero </p>
        <p>bike name:Xpulse 200 4V <br />price:₹ 1,72,968</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
            
      </div>

      <div className="bike">
        <img src={img2} alt="third" />
        <p>Company:Suzuki</p>
        <p>bike name:V-Strom SX<br />price:₹ 2,48,256</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img3} alt="fourth" />
        <p>Company:KTM</p>
        <p>bike name:390 Adventure <br/>price:₹ 3,90,240</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img4} alt="fifth" />
        <p>Company:BMW</p>
        <p>bike name:G 310 GS<br />price:₹ 4,19,883</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img5} alt="sixth" />
        <p>Company:Benelli </p>
        <p>bike name: TRK 502<br />price:₹ 6,53,289</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img6} alt="seven" />
        <p>Company:Yezdi</p>
        <p>bike name:Adventure<br />price:₹ 2,53,441</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img7} alt="eight" />
        <p>Company:Honda </p>
        <p>bike name:NX 500<br />price:₹ 6,58,695</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>
      
      <div className="bike">
        <img src={img8} alt="eigth" />
        <p>Company:Triumph</p>
        <p>bike name: Tiger 900<br />price:₹ 15,67,722</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img9} alt="nine" />
        <p>Company:Harley-Davidson</p>
        <p>bike name: PAN America 1250<br />price:₹ 27,16,248</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img10} alt="ten" />
        <p>Company:BMW</p>
        <p>bike name:R 1250 GS Adventure<br />price:₹ 24,82,760</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img11} alt="elevan" />
        <p>Company:Honda </p>
        <p>bike name:Africa Twin<br />price:₹ 17,75,205</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

        
      
    </div>
    </div>
  )
}
export default Tb;
