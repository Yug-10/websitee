import React from "react";
import "./Mt.css";
import img from "./Assets/b2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Dominar() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="second" />
        <div className="sb1">
          <h1>Bajaj Dominar 400</h1>

          <p>
            --The Bajaj Dominar 400 is a sports touring bike and the flagship
            model of the manufacturer, designed to offer solid performance on
            the highways. Now Bajaj is planning on updating the Dominar range.
            Both the Dominar 400 and its smaller capacity sibling the Dominar
            250 will likely get a lot of new features.
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p>Rs.2.31 Lakh*</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
      

        <table>
          <thead>
            <h2>Dominar 400 specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>27 kmph</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>Single cylinder, 4 stroke, DOHC, 4 Valve, Liquid Cooled, Triple
              Spark</td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>40 PS @ 8800 rpm</td>
            </tr>
            <br></br>
            <tr>
              <td>Front break</td>
              <td>Disk</td>
            </tr>
            <br></br>
            <tr>
              <td>Fuel Capacity</td>
              <td>13L</td>
            </tr>
          </tbody>
        </table>

        <div className="specification1">
          <table>
            <thead>
              <tr>
                <td>Displacement</td>
                <td>373.3cc</td>
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
                <td>35 Nm @ 6500 rpm</td>
              </tr>
              <br></br>
              <tr>
                <td>Rear Brake</td>
                <td>Disk</td>
              </tr>
              <br></br>
              <tr>
                <td>Body type</td>
                <td>Sports naked, Sports bike </td>
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
            <h2>Dominar 400 Features</h2>
            <tr>
              <td>ABS</td>
              <td>Dual Channel</td>
            </tr>
            <br></br>
            <tr>
              <td>LED TAIL LIGHT</td>
              <td>Yes</td>
            </tr>
            <br></br>
            <tr>
              <td>odometer</td>
              <td>Digital</td>
            </tr>
            <br></br>
            <tr>
              <td>Fual Guage</td>
              <td>Yes</td>
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
              <br></br>
              <tr>
                <td>Adjustable Windshield</td>
                <td>Yes</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="specification3">
        <table>
          <thead>
            <h2>What’s Included with Dominar 400</h2>
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
          <h2>Dominar 400 App Features</h2>
          <tr>
            <td>Calls & Messaging</td>
            <td>yes</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Dominar;
