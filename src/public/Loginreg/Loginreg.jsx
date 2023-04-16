import * as React from "react";
import "./Loginreg.css";
import group from "./assets/group.svg";
import MainButtons from "./components/MainButtons";

import { signInWithGoogle } from '../../firebase';

function Loginreg() {

  const propsData = {
    mainButtons: {
      mainButton: "Login",
      link: "/login",
    },
    mainButtons1: {
      mainButton: "Registration",
      link: "/registration",
    },
  };
  return (
    <div className="loginregistration">
      <img className="group" src={group} alt="login reg" />
      <span className="energy-saver">ENERGY SAVER</span>

      <MainButtons
        className="main-buttons-instance-1"
        {...propsData.mainButtons}
      />
      <MainButtons
        className="main-buttons-1-instance"
        {...propsData.mainButtons1}
      />

      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />

    </div>
  );
}
export default Loginreg;
