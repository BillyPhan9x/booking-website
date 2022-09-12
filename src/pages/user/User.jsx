import React from "react";

import NavBar from "../../components/navbar/NavBar";
import Register from "../../components/user/Register";
import Footer from "../../components/footer/Footer";

import "./User.css";

function User() {
  return (
    <div className="user">
      <NavBar />
      <div className="xx">
        <Register />
      </div>
      <Footer />
    </div>
  );
}

export default User;
