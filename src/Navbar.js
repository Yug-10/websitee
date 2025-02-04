import React from 'react'
import "./Navbar.css";
import "./Login.js"
import{Link}from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <div className="navbar">

      <div className="login">
      <button onClick={() => navigate("/Login")}>Login</button>
    </div>
     
        <h1>Bikes'dekho</h1>
        <br></br>
        <Link to="/Home">HOME</Link>
        <Link to="/About1">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">Cruiser bike</Link>
        <Link to="/Gallary">Sports bike</Link>
    </div>
    </>
  );
}
export default Navbar;



