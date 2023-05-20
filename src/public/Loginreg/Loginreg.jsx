import * as React from "react";
import "./Loginreg.css";
import group from "./assets/group.svg";
import MainButtons from "./components/MainButtons";
import loginService from "../../services/LoginService";
import {useNavigate} from "react-router";
import {setHome} from "../../store/home-slice";
import {loggedIn} from "../../store/logged-user-slice";
import {useDispatch} from "react-redux";

function Loginreg() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function signInWithGoogle() {
    loginService.loginWithGoogle().then((user) => {
      if (user) {
        dispatch(setHome({}));
        dispatch(loggedIn(user));
        navigate("/");
      }
    })
  }

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
    </div>
  );
}
export default Loginreg;
