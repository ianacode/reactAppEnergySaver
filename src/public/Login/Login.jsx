import * as React from "react";
import { useState } from "react";
import "./Login.css";
import imagesLogin from "./assets/imagesLogin.svg";
import loginService from "../../services/LoginService";
import { useNavigate } from "react-router";
import {setHome} from "../../store/home-slice";
import {loggedIn} from "../../store/logged-user-slice";
import {useDispatch} from "react-redux";


function Login() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("mattiew@ua.pt");
  const [password, setPassword] = React.useState("");
  const [hover, setHover] = useState('');

  function handleLogin() {
    loginService.login(email, password).then((user) => {
      if (user) {
        navigate("/");
      }
    })
  }

  function signInWithGoogle() {
    loginService.loginWithGoogle().then((user) => {
      if (user) {
        dispatch(setHome({}));
        dispatch(loggedIn(user));
        navigate("/");
      }
    })
  }

  return (
    <div className="login">
      <img className="images-login" src={imagesLogin} alt="login" />
      <span className="energy-saver-can-cha">
        Energy saver can change way you live in the future
      </span>
      <input
        className="login-form-stroke"
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-form-stroke"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={`main-buttons main-buttons-instance-1 ${hover}`} onClick={() => handleLogin()}>
        <div className="vector"
          onMouseEnter={() => setHover('active')}
          onMouseLeave={() => setHover('')}
          onTouchStart={() => setHover('active')}
          onTouchEnd={() => setHover('')}>
          Login</div>
      </button>

      <span className="dont-have-an-account">
        Don’t have an account? <a className="dont-have-an-account-sign-up" onClick={() => navigate('/registration')}>Sign up</a>
      </span>

      <button className="login-with-google-btn" onClick={() => signInWithGoogle()}>
        Sign in with Google
      </button>

    </div>
  );
}
export default Login;
