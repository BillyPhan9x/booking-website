import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form">
      <h1 className="form-title">Save time, save money!</h1>
      <span className="form-description">
        Sign up and we'll send the best deals to you
      </span>
      <div className="form-subcribe">
        <input type="text" placeholder="Your Email" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default Contact;
