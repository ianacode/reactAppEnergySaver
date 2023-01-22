import * as React from "react";
import "./AddMember.css";
import Footer from "../../components/Footer/Footer";


function AddMember(props) {



  return (
    <>

      <div className="addmember">

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
          placeholder="Date of birth"
          type="date"
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
          <div className="vector">Add member</div>
        </button>

      </div>
      <Footer />
    </>
  );
};
export default AddMember;
