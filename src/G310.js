import React from "react";
import "./Mt.css";
import img from "./Assets/sb5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function G310() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>BMW G310 RR</h1>

          <p>
            --The G310RR is the most affordable fully-faired BMW motorcycle in India. It borrows most of the cycle parts from its naked sibling – the G310R, but gets additional fairing, revised ergonomics and priced a bit higher. Being a BMW, the G310RR is bound to turn heads and also expect a premium experience. </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p>Rs. 3.05 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2> BMW G310 RR specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>30.3kmpl</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>
              Water-cooled, single-cylinder 4-stroke engine, four valves, two overhead camshafts and cam followers, wet sump lubrication
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>33.99 PS @ 9700 rpm</td>
            </tr>
            <br></br>
            <tr>
              <td>Front break</td>
              <td>Disk</td>
            </tr>
            <br></br>
            <tr>
              <td>Fuel Capacity</td>
              <td>12L</td>
            </tr>
          </tbody>
        </table>

        <div className="specification1">
          <table>
            <thead>
              <tr>
                <td>Displacement</td>
                <td>313cc</td>
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
                <td>27 Nm @ 7700 rpm</td>
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
            <h2>G310 RR Features</h2>
            <tr>
              <td>ABS</td>
              <td>Dual Channel</td>
            </tr>
            <br></br>
            <tr>
              <td>Riding Modes</td>
              <td>Track,Sports,Urban</td>
            </tr>
            <br></br>
            <tr>
              <td>Navigation</td>
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
                <td>LED tail light</td>
                <td>Yes</td>
              </tr>
              <br></br>
              <tr>
                <td>odometer</td>
                <td>Digital</td>
              </tr>
              <br></br>

              <tr>
                <td>Fuel gauge</td>
                <td>Yes</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="specification3">
        <table>
          <thead>
            <h2>What’s Included with G310 RR</h2>
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
          <h2>
            G310 RR App Features</h2>
          <tr>
            <td>Navigation Assist</td>
            <td>yes</td>
          </tr>
          <br></br>

      
        </thead>
      </table>
    </div>
  );
}

export default G310;
