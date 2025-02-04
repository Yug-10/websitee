import React from 'react'
import "./Mt.css";
import img from "./Assets/sb4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";


function CBR() {
  return (
  
      <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>Honda CBR 650R</h1>

          <p>
            --The 2022 Honda CBR650R has arrived in the Indian market to rival the likes of the Kawasaki Ninja 650. The mechanical specifications retain the BS6-compliant 648.72cc, liquid-cooled, inline four-cylinder engine that is linked to a six-speed gearbox and produces 85.8bhp at 12,000rpm and 57.5Nm of peak torque at 8,500rpm. 
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p>Rs. 9.30 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2>CBR 650R specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>
              23 kmpl   </td>
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
            <h2>CBR 650R Features</h2>
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
            <h2>What’s Included with CBR 650R</h2>
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
          <h2>CBR 650R App Features</h2>
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
  )
}

export default CBR
