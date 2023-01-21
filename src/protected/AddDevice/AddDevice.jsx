import * as React from "react";
import "./AddDevice.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function AddDevice(props) {



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
        placeholder="Power"
        type="text"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button className="main-buttons main-buttons-instance-1" >
        <div className="vector">Add device</div>
      </button>

    </div>
    <Footer />
    </>
  );
};
export default AddDevice;
