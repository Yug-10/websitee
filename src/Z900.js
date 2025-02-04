import React from 'react'
import "./z900.css";
import img from "./Assets/sb9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function Z900() {
  return (
    <div>
        <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>Kawasaki Z900</h1>

          <p>
            --The Z900 is the fast, attention seeking hooligan motorcycle. Packed with an inline four-cylinder motor, it is apt for city as well as for highway trips. The bike benefits from Kawasaki’s service reach but is little expensive to maintain.
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />

          <p>Rs. 9.98 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2>Z900 specification</h2>
            <tr>
              <td>Mileage(overall)</td>
              <td>17 kmpl</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>
              Liquid-cooled, 4-stroke In-Line Four
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>125 PS @ 9500 rpm</td>
            </tr>
            <br></br>
            <tr>
              <td>Front break</td>
              <td> Double Disk</td>
            </tr>
            <br></br>
            <tr>
              <td>Fuel Capacity</td>
              <td>17L</td>
            </tr>
          </tbody>
        </table>

        <div className="specification1">
          <table>
            <thead>
              <tr>
                <td>Displacement</td>
                <td>948cc</td>
              </tr>
              <br></br>
            </thead>
            <tbody>
              <tr>
                <td>No. of Cylinders</td>
                <td>4</td>
              </tr>
              <br></br>
              <tr>
                <td>Max Torque</td>
                <td>98.6 Nm @ 7700 rpm</td>
              </tr>
              <br></br>
              <tr>
                <td>Rear Brake</td>
                <td> Disk</td>
              </tr>
              <br></br>
              <tr>
                <td>Body type</td>
                <td>Sports naked bike </td>
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
            <h2>Z900 Features</h2>
            <tr>
              <td>ABS</td>
              <td>Dual Channel</td>
            </tr>
            <br></br>
            <tr>
              <td>Riding Modes</td>
              <td>Track,Sports,Urban</td>.
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
            <br></br>

            <tr>
                <td>LED tail light</td>
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
                <td>Traction Control</td>
                <td>Yes</td>
              </tr>
              <br></br>
            <tr> 
                <td>Launch Control</td>
                <td>Yes</td>
            </tr>
            <br></br>
              <tr>
                <td>Power Mode</td>
                <td>Yes</td>
              </tr>
              <br></br>

            </thead>
          </table>
        </div>
      </div>
<br></br>
      <div className="specification3">
        <table>
          <thead>
            <h2>What’s Included with Z900</h2>
            <tr>
              <td>Mobile Application</td>
              <td>yes</td>
            </tr>
          </thead>
        </table>
      </div>
<br></br>
      <div className="specification4"></div>
      <table>
        <thead>
          <h2>Z900 App Features</h2>
          <tr>
            <td>Low battery alert</td>
            <td>yes</td>
          </tr>
          <br></br>
        </thead>
      </table>
    </div>
  )
}

export default Z900
