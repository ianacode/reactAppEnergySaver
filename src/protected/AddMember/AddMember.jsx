import * as React from "react";
import { useState } from "react";
import "./AddMember.css";
import Footer from "../../components/Footer/Footer";
import userService from "../../services/UserService";
import { useNavigate } from "react-router";
import {useSelector} from "react-redux";


function AddMember() {

  const user = useSelector((state) => state.loggedUser.currentUser);
  const navigate = useNavigate()
  const [hover, setHover] = useState('');

  const [member, setMember] = useState({
    first_name: "",
    last_name: "",
    dateOfBirth: "",
    email: "",
    img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFdyaXR0ZW4gYnkgVHJlZXIgKGdpdGxhYi5jb20vVHJlZXIpIC0tPg0KPHN2ZyANCgl2ZXJzaW9uPSIxLjEiIA0KCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgDQoJeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCXdpZHRoPSI2MDAiIA0KCWhlaWdodD0iNjAwIg0KCWZpbGw9IndoaXRlIj4NCg0KICA8dGl0bGU+QWJzdHJhY3QgdXNlciBpY29uPC90aXRsZT4NCg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImNpcmN1bGFyLWJvcmRlciI+DQogICAgICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjI4MCIgLz4NCiAgICA8L2NsaXBQYXRoPg0KICAgIDxjbGlwUGF0aCBpZD0iYXZvaWQtYW50aWFsaWFzaW5nLWJ1Z3MiPg0KCSAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iNDk4IiAvPg0KICAgIDwvY2xpcFBhdGg+DQogIDwvZGVmcz4NCiAgDQogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMjgwIiBmaWxsPSJibGFjayIgY2xpcC1wYXRoPSJ1cmwoI2F2b2lkLWFudGlhbGlhc2luZy1idWdzKSIgLz4NCiAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMjMwIiByPSIxMTUiIC8+DQogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjU1MCIgcj0iMjA1IiBjbGlwLXBhdGg9InVybCgjY2lyY3VsYXItYm9yZGVyKSIgLz4NCjwvc3ZnPg==",
  });
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

  function submitForm(event) {
    // react will call this function when the form is submitted
    event.preventDefault();
    // set adult if dateOfBird is before 18 years ago
    const dateOfBirth = new Date(member.dateOfBirth);
    const today = new Date();
    member.role = today.getFullYear() - dateOfBirth.getFullYear() >= 18 ? "adult" : "child";
    member.home_id = user.home_id;
    userService.addUser(member).then(() => {
      navigate("/members");
    });
  }

  return (
    <>
      <div className="addmember">
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

        <button className={`main-buttons main-buttons-instance-1 ${hover}`}
          onClick={submitForm}
        >
          <div className="vector"
            onMouseEnter={() => setHover('active')}
            onMouseLeave={() => setHover('')}
            onTouchStart={() => setHover('active')}
            onTouchEnd={() => setHover('')}>
            Add member</div>
        </button>

      </div>
      <Footer />
    </>
  );
}
export default AddMember;
