import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
       
        <div className="info-item">
          <h2>Address:</h2>
          <p>123 gota, Ahmedabad,Gujrat</p>
        </div>
        <div className="info-item">
          <h2>Phone:</h2>
          <p>9080515655</p>
        </div>
        <div className="info-item">
          <h2>Email:</h2>
          <p>contact@bikesdekho.com</p>
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write something.."></textarea>

          <button type="submit" className="submit-button">Submit</button>
      
        </form>
      </div>
    </div>
  );
}
export default Contact;

