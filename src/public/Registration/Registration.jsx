import * as React from "react";
import { useNavigate } from "react-router";
import "./Registration.css";
import Footer from "../../components/Footer/Footer";


function Registration(props) {

  const navigate = useNavigate();

  return (


    <div className="registration">

      <input
        className="login-form-stroke"
        placeholder="Photo"
        type="file"
      />

      <input
        className="login-form-stroke"
        placeholder="Name"
        type="text"
      />

      <input
        className="login-form-stroke"
        placeholder="Surname"
        type="text"
      />

      <input
        className="login-form-stroke"
        placeholder="Family username"
        type="text"
      />

      <input
        className="login-form-stroke"
        placeholder="Date of birth"
        type="date"
      />

      <input
        className="login-form-stroke"
        placeholder="Address"
        type="text"
      />

      <input
        className="login-form-stroke"
        placeholder="Email"
        type="email"
      />

      <input
        className="login-form-stroke"
        placeholder="Password"
        type="password"
      />

      <input
        className="login-form-stroke"
        placeholder="Repeat password"
        type="password"
      />

      <button className="main-buttons main-buttons-instance-1" >
        <div className="vector">Registration</div>
      </button>

      <span className="warning">
      By clicking the "Registration" button, you consent to the processing of personal data
      </span>

      <span className="dont-have-an-account">
        Do you have an account? <a className="dont-have-an-account-sign-up" onClick={() => navigate('/login')}>Log in</a>
      </span>

    </div>


  );
};
export default Registration;
