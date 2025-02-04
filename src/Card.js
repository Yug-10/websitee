import React from 'react';
import img from "./Assets/b1.jpg";
import img1 from "./Assets/b2.jpg";
import img2 from "./Assets/b3.jpg";
import img3 from "./Assets/b4.jpg";
import img4 from "./Assets/b5.jpg";
import img5 from "./Assets/b6.jpg";

function Card(props) {
  return (
    <div className="container">
      <h1>BIKES</h1>
      <div className="bike">
        <img src={img} alt="first" />
        <p>Company: Yamaha</p>
        <p>bike name: MT15<br />price: ₹1,50,000</p>  
      </div>

      <div className="bike">
        <img src={img1} alt="second" />
        <p>Company: Bajaj</p>
        <p>bike name: Dominar<br />price: ₹2,50,000</p>
      </div>

      <div className="bike">
        <img src={img2} alt="third" />
        <p>Company: Royal Enfield</p>
        <p>bike name: Hunter 350<br />price: ₹1,50,000</p>
      </div>

      <div className="bike">
        <img src={img3} alt="fourth" />
        <p>Company: Suzuki</p>
        <p>bike name: Gixxer SF<br />price: ₹1,46,000</p>
      </div>

      <div className="bike">
        <img src={img4} alt="fifth" />
        <p>Company: TVS</p>
        <p>bike name: Raider 125<br />price: ₹1,07,369</p>
      </div>

      <div className="bike">
        <img src={img5} alt="sixth" />
        <p>Company: Royal Enfield</p>
        <p>bike name: Interceptor 650<br />price: ₹3,02,418</p>
      </div>
    </div>
  );
}

export default Card;