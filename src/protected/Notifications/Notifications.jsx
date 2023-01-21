import * as React from "react";
import "./Notifications.css";
import vector from "./assets/vector.svg";
import frame2114 from "./assets/frame2114.svg";
import frame2115 from "./assets/frame2115.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const Notifications = () => {

  return (
    <>
    <Header />
    <Breadcrumb label="Notifications" />
    <div className="notifications">
    
      <button className="vector">
        <img className="vector-1" src={vector} />
        <span className="kitchen-heating">Kitchen - Heating</span>
      </button>
      <span className="viewed-notifications">Viewed notifications</span>
      <div className="vector-2">
        <img className="frame-2114" src={frame2114} />
        <div className="flex-container-3">
          <span>Tom</span>
          <span className="some-notification-ab">
            Some notification about device in the room 1...
          </span>
        </div>
      </div>
      <div className="vector-3">
        <img className="frame-2115" src={frame2115} />
        <div className="flex-container-4">
          <span className="anna">Anna</span>
          <span className="some-notification-ab-1">
            Some notification about device in the room 1...
          </span>
        </div>
      </div>
   
    </div>
     <Footer />
     </>
  );
};
export default Notifications;
