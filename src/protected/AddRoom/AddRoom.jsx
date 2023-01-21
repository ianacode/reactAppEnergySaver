import * as React from "react";
import "./AddRoom.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function AddRoom(props) {



  return (
    <>
    <Header />
    <Breadcrumb label="Rooms" />
    <div className="addroom">
      <input
        className="login-form-stroke"
        placeholder="Room name"
        type="text"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-form-stroke"
        placeholder="Image"
        type="img"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button className="main-buttons main-buttons-instance-1" >
        <div className="vector">Add room</div>
      </button>

    </div>
    <Footer />
    </>
  );
};
export default AddRoom;
