import React from 'react'
import "./gallary.css";
import img from "./Assets/b1.jpg";
import img1 from "./Assets/b2.jpg";
import img2 from "./Assets/sb1.jpg";
import img3 from "./Assets/b4.jpg";
import img4 from "./Assets/sb2.jpg";
import img5 from "./Assets/sb3.jpg";
import img6 from "./Assets/sb4.jpg";
import img7 from "./Assets/sb5.jpg";
import img8 from "./Assets/sb6.jpg";
import img9 from "./Assets/sb7.jpg";
import img10 from "./Assets/sb8.jpg";
import img11 from "./Assets/sb9.jpg";
import { useNavigate } from 'react-router-dom';


function Gallary() {
  const navigate1 = useNavigate();
  return (
    <div>
      <div className="container">
      <h1>SPORTS BIKE</h1>
      <div className="bike">
        <img src={img} alt="first" />
        <p>Company: Yamaha</p>
        <p>bike name: MT15<br />price: ₹1,50,000</p>  
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img1} alt="second" />
        <p>Company: Bajaj</p>
        <p>bike name: Dominar<br />price: ₹2,50,000</p>
        <button onClick={() => navigate1("/Dominar")}>Know more</button>
            
      </div>

      <div className="bike">
        <img src={img2} alt="third" />
        <p>Company:Yamaha</p>
        <p>bike name: R15 V4<br />price: ₹1,83,155</p>
        <button onClick={() => navigate1("/R15")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img3} alt="fourth" />
        <p>Company: Suzuki</p>
        <p>bike name: Gixxer SF<br />price: ₹1,46,000</p>
        <button onClick={() => navigate1("/Gixer")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img4} alt="fifth" />
        <p>Company:Bajaj </p>
        <p>bike name: Pulsar RS 200<br />price: ₹1,72,251</p>
        <button onClick={() => navigate1("/Rs")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img5} alt="sixth" />
        <p>Company: TVS Apache</p>
        <p>bike name:  RR 310<br />price:₹ 2,71,928</p>
        <button onClick={() => navigate1("/RR")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img6} alt="seven" />
        <p>Company:Honda</p>
        <p>bike name:CBR 650R<br />price:₹ 9,34,816</p>
        <button onClick={() => navigate1("/CBR")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img7} alt="eight" />
        <p>Company:BMW </p>
        <p>bike name:G310 RR<br />price:3,05,000</p>
        <button onClick={() => navigate1("/G310")}>Know more</button>
      </div>
      
      <div className="bike">
        <img src={img8} alt="eigth" />
        <p>Company:Aprilia </p>
        <p>bike name: RS 660<br />price:₹ 17,74,000</p>
        <button onClick={() => navigate1("/Rs610")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img9} alt="nine" />
        <p>Company:Triumph</p>
        <p>bike name:Speed Triple 1200 RS <br />price:₹ 18,25,000</p> 
        <button onClick={() => navigate1("/SPEED")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img10} alt="ten" />
        <p>Company:BMW</p>
        <p>bike name:S 1000 RR<br />price:₹ 20,75,000</p>
        <button onClick={() => navigate1("/S1000")}>Know more</button>
      </div>

      <div className="bike">
        <img src={img11} alt="elevan" />
        <p>Company:Kawasaki </p>
        <p>bike name:Z 900<br />price:₹ 9,38,000</p>
        <button onClick={() => navigate1("/Z900")}>Know more</button>
      </div>
      
    </div>
    </div>
  )
  
}
export default Gallary;