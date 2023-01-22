import * as React from "react";
import "./NotificationRead.css";
import vector from "./assets/vector.svg";
import frame2114 from "./assets/frame2114.svg";
import frame2115 from "./assets/frame2115.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const NotificationRead = () => {

  return (
    <>
    <Header />
    <Breadcrumb label="Notification" />
    <div className="notificationread">
    
      

      <div className="vector-2">
        <img className="frame-2114" src={frame2114} />
        <div className="flex-container-3">
          <span>Tom</span>
          <span className="some-notification-ab">
            Some notification about device in the room 1... Some notification about device in the room 1... Some notification about device in the room 1...

            Some notification about device in the room 1...
            Some notification about device in the room 1...Some notification about device in the room 1...Some notification about device in the room 1...
          </span>
        </div>
      </div>
      
  
   
    </div>
     <Footer />
     </>
  );
};
export default NotificationRead;
