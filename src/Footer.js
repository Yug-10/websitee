import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faSquareInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Bikes Dekho</h2>
        <p>Your one-stop destination for all types of bikes.</p>
        <div className="footer-links">
          <Link to="/Home">Home</Link>
          <Link to="/About1">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">Cruiser bike</Link>
          <Link to="/Gallary">Sports bike</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Bikes Dekho. All rights reserved.</p>

          join us on
          <div className="icon">
  
          <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareInstagram} color="white"/></a>

          <a href="https://www.facebook.com/login.php/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} color="white"/></a>
          
          <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} color="white"/></a>
          
          <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} color="white"/></a> 
        </div>
   
      </div>
    </footer>
  );
}
export default Footer;

