import * as React from "react";
import { useState } from "react";
import "./AddMember.css";
import Footer from "../../components/Footer/Footer";


function AddMember(props) {
  const [hover, setHover] = useState('');

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

        <button className={`main-buttons main-buttons-instance-1 ${hover}`}>
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
};
export default AddMember;
