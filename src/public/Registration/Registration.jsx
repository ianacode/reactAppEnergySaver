import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Registration.css";

function Registration(props) {

  const navigate = useNavigate();
  const [hover, setHover] = useState('');

  return (


    <div className="registration">

      <label className="select-image">
        <input type="file" />
        <span>Select image</span>
      </label>

      {/* <input
        className="login-form-stroke"
        placeholder="Photo"
        type="file"
      /> */}

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

      <button className={`main-buttons main-buttons-instance-1 ${hover}`}>
        <div className="vector"
          onMouseEnter={() => setHover('active')}
          onMouseLeave={() => setHover('')}
          onTouchStart={() => setHover('active')}
          onTouchEnd={() => setHover('')}>
          Registration</div>
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
