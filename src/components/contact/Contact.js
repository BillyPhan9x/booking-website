import React, { useState } from "react";
import "./Contact.css";

const emailUserData = [];
const Contact = () => {
  const [enterdEmail, setEnteredEmail] = useState("");

  const handleSubcribe = () => {
    emailUserData.push({ enterdEmail });
    setEnteredEmail("");
    console.log(emailUserData);
  };

  const handleSaveEmail = (e) => {
    // console.log(e.target.value);
    setEnteredEmail(e.target.value);
  };

  return (
    <div className="form">
      <div>
        <h1 className="form-title">Save time, save money!</h1>
        <span className="form-description">
          Sign up and we'll send the best deals to you
        </span>
        <div className="form-subcribe">
          <input
            type="text"
            placeholder="Your Email"
            value={enterdEmail}
            onChange={handleSaveEmail}
            className="textInput"
          />
          <button
            type="submit"
            onClick={handleSubcribe}
            className="subcribeBtn"
          >
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
