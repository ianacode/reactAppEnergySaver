import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Registration.css";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase';

import loginService from "../../services/LoginService";

function Registration() {

  const navigate = useNavigate();
  const [hover, setHover] = useState('');

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      loginService.login(email, password).then((authenticated) => {
        if (authenticated) {
          navigate("/");
        }
      });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };




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
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <input
        className="login-form-stroke"
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <input
        className="login-form-stroke"
        placeholder="Repeat password"
        type="password"
      />

      <button className={`main-buttons main-buttons-instance-1 ${hover}`} onClick={register}>
        <div className="vector"
          onMouseEnter={() => setHover('active')}
          onMouseLeave={() => setHover('')}
          onTouchStart={() => setHover('active')}
          onTouchEnd={() => setHover('')}>
          Registration</div>
      </button>

      <span className="warning">
        By clicking the &quot;Registration&quot; button, you consent to the processing of personal data
      </span>

      <span className="dont-have-an-account">
        Do you have an account? <a className="dont-have-an-account-sign-up" onClick={() => navigate('/login')}>Log in</a>
      </span>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>

    </div>


  );
}
export default Registration;
