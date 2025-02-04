import React from "react";
import "./Mt.css";
import img from "./Assets/b1.jpg";
// import YouTube from 'react-youtube';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Mt() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>MT 15 V4</h1>

          <p>
            --The Yamaha MT15 V2 is an entry-level naked streetfighter based on
            the Yamaha R15. Its performance is suitable for beginners as well as
            experienced riders. It’s oriented more towards daily riding as well
            occasional weekend rides. With its more upright riding posture, it
            offers more practicality as compared to the R15.
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p>Rs.1.69 - 1.74 Lakh*</p>
        </div>
      </div>
      <br></br>
      
      <div className="specification">
       

        <table>
          <thead>
            <h2>Yamaha MT 15 v4 specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>57 kmph</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>Liquid cooled.4-stroke,SOCH,4-valve</td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>18.4ps @10000 rpm</td>
            </tr>
            <br></br>
            <tr>
              <td>Front break</td>
              <td>Disk</td>
            </tr>
            <br></br>
            <tr>
              <td>Fuel Capacity</td>
              <td>10L</td>
            </tr>
          </tbody>
        </table>

        <div className="specification1">
          <table>
            <thead>
              <tr>
                <td>Displacement</td>
                <td>155cc</td>
              </tr>
              <br></br>
            </thead>
            <tbody>
              <tr>
                <td>No. of Cylinders</td>
                <td>1</td>
              </tr>
              <br></br>
              <tr>
                <td>Max Torque</td>
                <td>14.1 Nm @ 7500 rpm</td>
              </tr>
              <br></br>
              <tr>
                <td>Rear Brake</td>
                <td>Disk</td>
              </tr>
              <br></br>
              <tr>
                <td>Body type</td>
                <td>Sports bike </td>
              </tr>
              <br></br>
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
      <div className="specification2">
        <table>
          <thead>
            <h2>Yamaha MT 15 v4 Features</h2>
            <tr>
              <td>ABS</td>
              <td>Single Channel</td>
            </tr>
            <br></br>
            <tr>
              <td>LED TAIL LIGHT</td>
              <td>Yes</td>
            </tr>
            <br></br>
            <tr>
              <td>Tripmeter</td>
              <td>Digital</td>
            </tr>
          </thead>
        </table>

        <div className="specification22">
          <table>
            <thead>
              <tr>
                <td>Mobile Connectivity</td>
                <td>Bluetooth</td>
              </tr>
              <br></br>

              <tr>
                <td>Speedometer</td>
                <td>Digital</td>
              </tr>
              <br></br>

              <tr>
                <td>Techometer</td>
                <td>Digital</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="specification3">
        <table>
          <thead>
            <h2>What’s Included with Yamaha MT 15 V2</h2>
            <tr>
              <td>Mobile Application -YES</td>
             
            </tr>
          </thead>
        </table>
      </div>

      <div className="specification4"></div>
      <table>
        <thead>
          <h2>Yamaha MT 15 V2 App Features</h2>
          <tr>
            <td>Calls & Messaging - YES</td>
   
          </tr>
        </thead>
      </table>
<br></br>
{/* 
    <div className="videos">
      <h3>MT15 bike video</h3>
      <YouTube videoId="https://youtu.be/JmCthr-1fY0?si=-pgcU2Z353R48vUN" />

      


    </div> */}
    </div>
  );
}

export default Mt;
