import * as React from "react";
import { useState } from "react";
import "./AddRoom.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function AddRoom(props) {

  const [hover, setHover] = useState('');


  return (
    <>
      <Header />
      <Breadcrumb label="Rooms" />
      <div className="addroom">



      <label className="select-image">
          <input type="file" />
          <span>Select image</span>
        </label>

        
        <input
          className="login-form-stroke"
          placeholder="Room name"
          type="text"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        />


 



        <button className={`main-buttons main-buttons-instance-1 ${hover}`}>
          <div className="vector"
            onMouseEnter={() => setHover('active')}
            onMouseLeave={() => setHover('')}
            onTouchStart={() => setHover('active')}
            onTouchEnd={() => setHover('')}>
            Add room</div>
        </button>

      </div>
      <Footer />
    </>
  );
};
export default AddRoom;
