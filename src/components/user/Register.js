import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Register.css";

function Register(props) {
  const [login, setLogin] = useState(true);

  return (
    <div className="wrapper">
      <div className="modalForm">
        <div className="actionBtns">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="closeForm"
            onClick={() => {
              props.onChange();
            }}
          />
          <button className="actionBtn registerBtn">Register</button>
          <button className="actionBtn">Login</button>
          <button
            className={`moveBtn ${login ? "rightBtn" : ""}`}
            onClick={() => setLogin(!login)}
          >
            {!login ? "Register" : "Login"}
          </button>
        </div>
        <div className="userForm">
          <form
            action=""
            className={`${login ? "loginForm" : "registerForm"} 
            `}
          >
            <div className="inputGroup">
              <input type="email" placeholder="E-Mail" autoComplete="offf" />
            </div>
            <div className="inputGroup">
              <input
                type="password"
                placeholder="Password"
                autoComplete="offf"
                required
              />
            </div>
            <div className="inputGroup">
              <input
                type="password"
                placeholder="Confirm password"
                autoComplete="offf"
                required
              />
            </div>
            <div className="inputGroup">
              <input
                type="tel"
                name="phone"
                placeholder="095-512-2567"
                autoComplete="offf"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            <button type="submit" className="submitBtn">
              Register
            </button>
          </form>
          <form action="" className={`${login ? "registerForm" : "loginForm"}`}>
            <div className="inputGroup">
              <input
                type="email"
                placeholder="E-Mail"
                autoComplete="offf"
                required
              />
            </div>
            <div className="inputGroup">
              <input
                type="password"
                placeholder="Password"
                autoComplete="offf"
                required
              />
            </div>
            <div className="check">
              <input type="checkbox" />
              <span className="checkCheck">Remember me</span>
              <span className="forgot">Forgot Password</span>
            </div>
            <button type="submit" className="submitBtn">
              Login
            </button>
          </form>
          <div className="wrapIcon">
            <div className="iconForm">
              <svg
                viewBox="0 0 262 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                role="img"
              >
                <path
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  fill="#4285F4"
                ></path>
                <path
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  fill="#34A853"
                ></path>
                <path
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  fill="#EB4335"
                ></path>
              </svg>
              <span>Google</span>
            </div>
            <div className="iconForm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                role="img"
              >
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  fill="#0071c2"
                ></path>
              </svg>
              <span>Facebook</span>
            </div>
          </div>
          <span className="policy">
            By creating this account, you agree to our
            <strong>Privacy Policy</strong> & <strong>Cookie Policy.</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
