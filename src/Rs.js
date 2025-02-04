import React from "react";
import "./Mt.css";
import img from "./Assets/sb2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Rs() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>Bajaj Pulsar RS200</h1>

          <p>
            --The RS200 is one sport-looking motorcycle. It is loaded with
            features and technology that makes it an interesting bike to own.
            However, it has become quite pricey over the last few years, making
            it less desirable.
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
            <h2>Pulsar RS200 specification</h2>
            <tr>
              <td>Mileage(overall)</td>
              <td>35 kmpl</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>
                Fuel Injection System, Triple Spark 4 Valve 200cc BSVI DTS-i FI
                Engine, Liquid Cooled
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>24.5 PS @ 9750 rpm</td>
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
                <td>199.5cc</td>
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
                <td>18.7 Nm @ 8000 rpm</td>
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
            <h2>Pulsar RS200 Features</h2>
            <tr>
              <td>ABS</td>
              <td>Dual Channel</td>
            </tr>
            <br></br>
            <tr>
              <td>Tripmeter</td>
              <td>Digital</td>
            </tr>
            <br></br>

            <br></br>
            <tr>
              <td>Speedometer</td>
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

              <br></br>
              <tr>
                <td>Led tail light</td>
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
            <h2>What’s Included with Pulsar RS200</h2>
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
          <h2>Pulsar RS200 App Features</h2>
          <tr>
            <td>Calls & Messaging</td>
            <td>yes</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Rs;
