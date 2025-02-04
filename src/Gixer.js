import React from "react";
import "./Mt.css";
import img from "./Assets/b4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Gixer() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>Suzuki Gixxer SF 150</h1>

          <p>
            --Suzuki refreshes its Gixxer range of bikes with brand new colours
            but also hikes prices by a huge margin and Budget friendly Sports bike and low-Maintainance.
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p> Rs.1.58 - 1.73 Lakh*</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2>Gixxer SF 150 specification</h2>
            <tr>
              <td>Mileage(overall)</td>
              <td>45 kmph</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>4-Cycle, 1-cylinder, Air cooled</td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>13.6 PS @ 8000 rpm</td>
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
                <td>13.8 Nm @ 6000 rpm</td>
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
            <h2>Gixxer SF 150 Features</h2>
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
                <td>Adjustable Windshield</td>
                <td>Yes</td>
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
            <h2>What’s Included with Gixxer SF 150</h2>
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
          <h2>Gixxer SF 150 App Features</h2>
          <tr>
            <td>Calls & Messaging</td>
            <td>yes</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Gixer;
