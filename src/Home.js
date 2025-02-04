import React from 'react';
import './home.css';
import img from "./Assets/sb2.jpg";
import  img2 from "./Assets/c1.jpg";
import img3 from "./Assets/b5.jpg";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Bikes Dekho</h1>
      <p>Your one-stop destination for all types of bikes.</p>
      <div className="featured-bikes">
        <h2>Featured Bikes</h2>
        <div className="bikes-grid">

          <div className="bike-card">
          <img src={img} alt="first" />
        <p>Company: Bajaj Pulsar</p>
        <p>bike name: RS 200<br />price: ₹1,73,000</p>  

          </div>
          <div className="bike-card">
          <img src={img2} alt="first" />
        <p>Company: Royal Enfield</p>
        <p>bike name:Interceptor 650<br />price: ₹3,15,000</p>  

          </div>
          <div className="bike-card">
          <img src={img3} alt="third"/>
        <p>Company: TVS</p>
        <p>bike name:Raider 125<br />price: ₹1,20,000</p>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
