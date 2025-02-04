import React from "react";
import "./Mt.css";
import img from "./Assets/sb1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function R15() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>Yamaha R15 V4</h1>

          <p>
            --The Yamaha R15 V4 is one of the best 150cc sports bikes in India,
            in the entry-level segment. It comes with a performance-packed
            engine that too with decent mileage, sporty fully-faired design, and
            an aggressive riding posture. It is also one of the cheapest faired
            bikes in India, and is also one of the best selling Yamaha bikes in
            India.
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p>Rs.1.83 - 1.97 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2>Yamaha R15 V4 specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>55.20 kmpl</td>
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
              <td>11L</td>
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
                <td>14.2 Nm @ 7500 rpm</td>
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
            <h2>Yamaha R15 v4 Features</h2>
            <tr>
              <td>ABS</td>
              <td>Dual Channel</td>
            </tr>
            <br></br>
            <tr>
              <td>Riding Modes</td>
              <td>Track,Street,Sports</td>
            </tr>
            <br></br>
            <tr>
              <td>Quick Shifter</td>
              <td>Yes</td>
            </tr>

            <br></br>
            <tr>
              <td>odometer</td>
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
                <td>Traction Control</td>
                <td>Yes</td>
              </tr>
              <br></br>
              <tr>
                <td>Speedometer</td>
                <td>Digital</td>
              </tr>
              <br></br>

              <tr>
                <td>Tripmeter</td>
                <td>Digital</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="specification3">
        <table>
          <thead>
            <h2>What’s Included with Yamaha R15 v4</h2>
            <tr>
              <td>Mobile Application</td>
              <td>yes</td>
            </tr>
          </thead>
        </table>
      </div>

      <div className="specification4"></div>
      <table>
        <thead>
          <h2>Yamaha R15 V4 App Features</h2>
          <tr>
            <td>Calls & Messaging</td>
            <td>yes</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default R15;
