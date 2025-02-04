import React from 'react'
import "./about.css";
import p1 from "./Assets/c1.jpg";
import p2 from "./Assets/c2.jpg";
import p3 from "./Assets/c3.jpg";
import p4 from "./Assets/c4.jpg";
import p5 from "./Assets/cb5.jpg";
import p6 from "./Assets/cb6.jpg";
import p7 from "./Assets/cd7.jpg";
import p8 from "./Assets/cb8.jpg";
import p9 from "./Assets/cb9.jpg";
import p10 from "./Assets/cb10.jpg";
import p11 from "./Assets/cb11.jpg";
import p12 from "./Assets/cb12.jpg";
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate1 = useNavigate();
  return (
    <div>
          <div>
      <div className="container">
      <h1>CRUSIER BIKE</h1>
      <div className="bike">
        <img src={p1} alt="one" />
        <p>Company:Royal Enfield</p>
        <p>bike name: Interceptor 650<br />price: ₹3,02,418</p>  
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p2} alt="two" />
        <p>Company: Royal Enfield</p>
        <p>bike name:GT 65<br />price: ₹4,50,000</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p3} alt="three" />
        <p>Company:TVS </p>
        <p>bike name: Ronin<br />price: ₹1,50,000</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p4} alt="four" />
        <p>Company: Royal Enfield</p>
        <p>bike name: Hunter 350<br />price: ₹1,49,000</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p5} alt="five" />
        <p>Company:Honda </p>
        <p>bike name: CB 350<br />price:2,14,771 </p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p6} alt="six" />
        <p>Company:Royal Enfield</p>
        <p>bike name:Meteor 350<br />price:₹ 2,05,000</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p7} alt="seven" />
        <p>Company:Harley-Davidson</p>
        <p>bike name:Sportster S<br />price:₹ 16,48,938</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p8} alt="eight" />
        <p>Company:Kawasaki </p>
        <p>bike name:Eliminator<br />price:5,62,000</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p9} alt="nine" />
        <p>Company:Benelli  </p>
        <p>bike name:Imperiale 400 <br />price:₹ 2,34,929
        <button onClick={() => navigate1("/Mt")}>Know more</button>
        </p>
      </div>

      <div className="bike">
        <img src={p10} alt="ten" />
        <p>Company:QJ Motor</p>
        <p>bike name: SRC 500<br />price:₹ 2,39,905</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p11} alt="elevan"/>
        <p>Company:Keeway</p>
        <p>bike name:Keeway<br />price:₹ 4,28,793</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className="bike">
        <img src={p12} alt="twelve" />
        <p>Company:Triumph </p>
        <p>bike name:Rocket 3<br />price:₹ 20,19,599</p>
        <button onClick={() => navigate1("/Mt")}>Know more</button>
      </div>

      <div className='b1'>
        <button onClick={() => navigate1("/Tb")}>Adventure bikes</button>
      </div>
    </div>
    </div>

    </div>
  )
}
export default About;
