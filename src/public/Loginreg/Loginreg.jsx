import * as React from "react";
import "./Loginreg.css";
import group from "./assets/group.svg";
import MainButtons from "./components/MainButtons";

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
    </div>
  );
}
export default Loginreg;
