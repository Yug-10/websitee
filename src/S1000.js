import React from 'react'
import "./Mt.css";
import img from "./Assets/sb8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";


function S1000() {
  return (
    <div>
        <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>BMW S1000 RR</h1>

          <p>
            --The new S 1000 RR is a one of those few motorcycles despite its litre-class performance are forgiving and can be considered for regular use. It has the power and the tech to blow your mind away but also the simplicity, agility and the adrenalin rush that’ll urge to ride it more often.
          </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />

          <p>Rs. 20.75 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2> BMW S1000 RR specification</h2>
            <tr>
              <td>Mileage(overall)</td>
              <td>15.65kmpl</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>
              Water/oil-cooled 4-cylinder 4-stroke in-line engine, four titanium valves per cylinder
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>212.91 PS @ 13750 rpm</td>
            </tr>
            <br></br>
            <tr>
              <td>Front break</td>
              <td> Double Disk</td>
            </tr>
            <br></br>
            <tr>
              <td>Fuel Capacity</td>
              <td>16.5L</td>
            </tr>
          </tbody>
        </table>

        <div className="specification1">
          <table>
            <thead>
              <tr>
                <td>Displacement</td>
                <td>999cc</td>
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
                <td>113 Nm @ 11000 rpm</td>
              </tr>
              <br></br>
              <tr>
                <td>Rear Brake</td>
                <td> Disk</td>
              </tr>
              <br></br>
              <tr>
                <td>Body type</td>
                <td>Super bike </td>
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
            <h2>BMW S1000 RR Features</h2>
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
              <tr>
                <td>Navbar</td>
                <td>Digital</td>
              </tr>
              <br></br>

              <tr>
                <td>SWitchable ABS</td>
                <td>Yes</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
<br></br>
      <div className="specification3">
        <table>
          <thead>
            <h2>What’s Included with S1000 RR</h2>
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
          <h2>S1000 RR App Features</h2>
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

export default S1000
