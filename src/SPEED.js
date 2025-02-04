import React from "react";
import "./Mt.css";
import img from "./Assets/sb7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SPEED() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>Triumph Speed Triple 1200 RS</h1>

          <p>
            --The Speed Triple 1200 RS is possibly one of the best roadsters Triumph has ever made. With its RS tag, things gets better with top-spec electronics, brakes and suspension. But just like other Triumphs, this bike too has limited sales and service reach and is a bit expensive to maintain. 
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />

          <p>Rs. 17.95 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2> Speed Triple 1200 RS specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>17.9kmpl</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>
              Liquid-cooled, 12 valve, DOHC, inline 3-cylinder
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>180 PS @ 10750 rpm</td>
            </tr>
            <br></br>
            <tr>
              <td>Front break</td>
              <td> Double Disk</td>
            </tr>
            <br></br>
            <tr>
              <td>Fuel Capacity</td>
              <td>15.5L</td>
            </tr>
          </tbody>
        </table>

        <div className="specification1">
          <table>
            <thead>
              <tr>
                <td>Displacement</td>
                <td>1160cc</td>
              </tr>
              <br></br>
            </thead>
            <tbody>
              <tr>
                <td>No. of Cylinders</td>
                <td>3</td>
              </tr>
              <br></br>
              <tr>
                <td>Max Torque</td>
                <td>125 Nm @ 9000 rpm</td>
              </tr>
              <br></br>
              <tr>
                <td>Rear Brake</td>
                <td> Disk</td>
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
            <h2>Triple Speed 1200RS Features</h2>
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
                <td>Crusier Control</td>
                <td>Yes</td>
            </tr>
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
            <h2>What’s Included with SPeed 1200RS</h2>
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
          <h2>SPeed 1200RS App Features</h2>
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

export default SPEED;
