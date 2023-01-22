import * as React from "react";
import { useState } from "react";
import "./AddDevice.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function AddDevice(props) {
  const [hover, setHover] = useState('');


  return (
    <>
      <Header />
      <Breadcrumb label="Devices" />
      <div className="adddevice">
        <input
          className="login-form-stroke"
          placeholder="Device name"
          type="text"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-form-stroke"
          placeholder="Power / Watts"
          type="number"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        />
        <button className={`main-buttons main-buttons-instance-1 ${hover}`}>
          <div className="vector"
            onMouseEnter={() => setHover('active')}
            onMouseLeave={() => setHover('')}
            onTouchStart={() => setHover('active')}
            onTouchEnd={() => setHover('')}>
            Add device</div>
        </button>

      </div>
      <Footer />
    </>
  );
};
export default AddDevice;
