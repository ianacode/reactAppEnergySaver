import * as React from "react";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import "./Registration.css";

import loginService from "../../services/LoginService";
import userService from "../../services/UserService";
import {loggedIn} from "../../store/logged-user-slice";
import {useDispatch, useSelector} from "react-redux";

function Registration() {

  const user = useSelector((state) => state.loggedUser.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hover, setHover] = useState('');
  const [error, setError] = useState('');

  const [member, setMember] = useState({
    first_name: "",
    last_name: "",
    dateOfBirth: "",
    email: "",
    password: "",
    img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFdyaXR0ZW4gYnkgVHJlZXIgKGdpdGxhYi5jb20vVHJlZXIpIC0tPg0KPHN2ZyANCgl2ZXJzaW9uPSIxLjEiIA0KCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgDQoJeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCXdpZHRoPSI2MDAiIA0KCWhlaWdodD0iNjAwIg0KCWZpbGw9IndoaXRlIj4NCg0KICA8dGl0bGU+QWJzdHJhY3QgdXNlciBpY29uPC90aXRsZT4NCg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImNpcmN1bGFyLWJvcmRlciI+DQogICAgICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjI4MCIgLz4NCiAgICA8L2NsaXBQYXRoPg0KICAgIDxjbGlwUGF0aCBpZD0iYXZvaWQtYW50aWFsaWFzaW5nLWJ1Z3MiPg0KCSAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iNDk4IiAvPg0KICAgIDwvY2xpcFBhdGg+DQogIDwvZGVmcz4NCiAgDQogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMjgwIiBmaWxsPSJibGFjayIgY2xpcC1wYXRoPSJ1cmwoI2F2b2lkLWFudGlhbGlhc2luZy1idWdzKSIgLz4NCiAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMjMwIiByPSIxMTUiIC8+DQogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjU1MCIgcj0iMjA1IiBjbGlwLXBhdGg9InVybCgjY2lyY3VsYXItYm9yZGVyKSIgLz4NCjwvc3ZnPg==",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    if (!member.first_name || !member.last_name || !member.dateOfBirth || !member.email || !member.password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (member.password === confirmPassword) {
      // set adult if dateOfBird is before 18 years ago
      const dateOfBirth = new Date(member.dateOfBirth);
      const today = new Date();
      member.role = today.getFullYear() - dateOfBirth.getFullYear() >= 18 ? "adult" : "child";
      console.log(member.role, member.email, dateOfBirth, today.getFullYear(), dateOfBirth.getFullYear(), member);
      if (member.role === "child" && !await userService.getUserByEmail(member.email)) {
        return
      }
      try{
        const user = await loginService.register(
          member.email,
          member.password,
          member.first_name + " " + member.last_name,
          member.img);
        if (user) {
          user.first_name = member.first_name;
          user.last_name = member.last_name;
          user.dateOfBirth = member.dateOfBirth;
          await userService.updateUser(user);
          dispatch(loggedIn(user));
        }
      } catch (e) {
        setError(e.message);
      }

    }
  };

  useEffect( () => {
    if (member.dateOfBirth) {
      const dateOfBirth = new Date(member.dateOfBirth);
      const today = new Date();
      const role = today.getFullYear() - dateOfBirth.getFullYear() >= 18 ? "adult" : "child";
      if (role === "child") {
        userService.getUserByEmail(member.email).then(user => {
          if (!user) {
            setError("You must be 18 years old to register")
          } else {
            setError("")
          }
        })
      }
    }
  }, [member]);

  return (
    <div className="registration">

      <label className="select-image">
        <img src={member.img} className="imageProfile" />
        <input type="file"
               onChange={async (event) => {
                 const file = event.target.files[0];
                 const base64 = await convertBase64(file);
                 setMember({ ...member, img: base64 })
               }}
        />
        <span className="labelProfile">Select image</span>
      </label>

      <input
        className="login-form-stroke"
        placeholder="Name"
        type="text"
        value={member.first_name}
        onChange={(event) => setMember({ ...member, first_name: event.target.value })}
      />

      <input
        className="login-form-stroke"
        placeholder="Surname"
        type="text"
        value={member.last_name}
        onChange={(event) => setMember({ ...member, last_name: event.target.value })}
      />

      <input
        className="login-form-stroke"
        placeholder="Date of birth"
        type="date"
        value={member.dateOfBirth}
        onChange={(event) => setMember({ ...member, dateOfBirth: event.target.value })}
      />

      <input
        className="login-form-stroke"
        placeholder="Email"
        type="email"
        value={member.email}
        onChange={(event) => setMember({ ...member, email: event.target.value })}
      />

      <input
        className="login-form-stroke"
        placeholder="Password"
        type="password"
        value={member.password}
        onChange={(event) => setMember({ ...member, password: event.target.value })}
      />

      <input
        className="login-form-stroke"
        placeholder="Repeat password"
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />

      {error && <span className="error">{error}</span>}

      <button className={`main-buttons main-buttons-instance-1 ${hover}`} onClick={register} disabled={error!==""}>
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

    </div>


  );
}
export default Registration;
