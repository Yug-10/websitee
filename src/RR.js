import React from "react";
import "./Mt.css";
import img from "./Assets/sb3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function RR() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>TVS Apache RR 310</h1>

          <p>
            --The Apache RR310 is the flagship motorcycle from TVS. It has several positives such as decently comfortable riding ergonomics, a bunch of modern features and good ride quality and handling. The main highlight of the motorcycle is the BMW-sourced engine which is potent enough for aggressive riding while being tractable for riding in the city. 
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p>Rs. 2.72 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2>Apache RR310 specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>33.1kmpl</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>SI, 4 stroke, 4 valve, Single cylinder, Liquid cooled, Reverse inclined</td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>34 PS @ 9700 rpm</td>
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
                <td>312.12cc</td>
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
                <td>27.3 Nm @ 7700 rpm</td>
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
            <h2>Apache RR310 Features</h2>
            <tr>
              <td>ABS</td>
              <td>Dual Channel</td>
            </tr>
            <br></br>
            <tr>
              <td>Riding Modes</td>
              <td>Track,Street,Sports,Urban</td>
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
            <h2>What’s Included with Apache RR310</h2>
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
          <h2>Apache RR310 App Features</h2>
          <tr>
            <td>Navigation Assist</td>
            <td>yes</td>
          </tr>
          <br></br> 

          <tr>
            <td>Low battery alert</td>
            <td>Yes</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default RR;
