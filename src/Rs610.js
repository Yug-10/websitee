import React from 'react'
import "./Mt.css";
import img from "./Assets/sb6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";


function Rs610() {
  return (
    <div>
      <div className="main">
        <img src={img} alt="first" />
        <div className="sb1">
          <h1>Aprilia RS 660</h1>

          <p>
            --The G310RR is the most affordable fully-faired BMW motorcycle in India. It borrows most of the cycle parts from its naked sibling – the G310R, but gets additional fairing, revised ergonomics and priced a bit higher. Being a BMW, the G310RR is bound to turn heads and also expect a premium experience. </p>

          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStar} color="yellow" />
          <FontAwesomeIcon icon={faStarHalfAlt} color="yellow" />
          <p>Rs. 13.39 Lakh**</p>
        </div>
      </div>
      <br></br>

      <div className="specification">
        <table>
          <thead>
            <h2> Aprilia RS 660 specification</h2>
            <tr>
              <td>Mileage(city)</td>
              <td>20.4kmpl</td>
            </tr>
            <br></br>
          </thead>
          <tbody>
            <tr>
              <td>Engine type</td>
              <td>
              2 parallel forward facing cylinders, 4 valves per cylinder, liquid-cooled with Ride-By-Wire
              </td>
            </tr>
            <br></br>
            <tr>
              <td>Max Power</td>
              <td>3100 PS @ 10500 rpm</td>
            </tr>
            <br></br>
            <tr>
              <td>Front break</td>
              <td>Disk</td>
            </tr>
            <br></br>
            <tr>
              <td>Fuel Capacity</td>
              <td>15L</td>
            </tr>
          </tbody>
        </table>

        <div className="specification1">
          <table>
            <thead>
              <tr>
                <td>Displacement</td>
                <td>659cc</td>
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
                <td>67 Nm @ 8500 rpm</td>
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
              <td>Track,Street,Sports</td>
            </tr>
            <br></br>


            
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
              <td>Speedometer</td>
              <td>Digital</td>
            </tr>
              
            </thead>
          </table>
        </div>
      </div>

      {/* <div className="specification3">
        <table>
          <thead>
            <h2>What’s Included with G310 RR</h2>
            <tr>
              <td>Mobile Application</td>
              <td>yes</td>
            </tr>
          </thead>
        </table>
      </div> */}

      <div className="specification4"></div>
      <table>
        <thead>
          <h2>
            G310 RR App Features</h2>
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

export default Rs610
