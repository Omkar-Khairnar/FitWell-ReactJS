import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import './style.css'
const UserSignIn = (props) => {
  const [type, setType] = useState("signIn");
  const {setmyAlert} = props;
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "auth-container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div>
      <div className="authheader">
  
      <div className={containerClass} id="container">
        <SignUpForm setmyAlert={setmyAlert} />
        <SignInForm  setmyAlert={setmyAlert}/>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="auth-h1">Welcome Back!</h1>
              <p className="auth-p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="auth-h1">Hello, Friend!</h1>
              <p className="auth-p">Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
      
  );
};

export default UserSignIn;
