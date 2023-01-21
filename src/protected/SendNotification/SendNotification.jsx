import * as React from "react";
import "./SendNotification.css";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import checkbox from "./assets/checkbox.svg";
import component16 from "./assets/component16.svg";
import vector from "./assets/vector.svg";
import home from "./assets/home.svg";
import icon from "./assets/icon.svg";
import document from "./assets/document.svg";
import component11 from "./assets/component11.svg";
import headerLine from "./assets/headerLine.svg";
import Btn from "./components/Btn";
import Menu from "./components/Menu";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const SendNotification = () => {
  const propsData = {
    mainButtons: {
      mainButton: "Send Notification",
      vector: vector,
    },
  };
  return (
    <>
    <Header />
    <Breadcrumb label="Send Notification" />
    <div className="send-notification">

      <div className="vector">
        <span className="message">Message:</span>
        <span className="if-turn-off-the-heat">
          If turn off the heater, you will save 250 points!
        </span>
      </div>
      <span className="send-to">Send to:</span>
      <div className="flex-container-3">
        <img className="checkbox" src={checkbox} />
        <span className="all-members-of-the-f">All members of the family</span>
      </div>
      <div className="flex-container-4">
        <img className="checkbox-1" src={checkbox} />
        <span>Tom</span>
      </div>
      <div className="flex-container-5">
        <img className="checkbox-2" src={checkbox} />
        <span>Anna</span>
      </div>
      <div className="flex-container-6">
        <img className="checkbox-3" src={checkbox} />
        <span>Silvia</span>
      </div>
      <MainButtons
        className="main-buttons-instance-1"
        {...propsData.mainButtons}
      />
  
    </div>
    <Footer />
     </>
  );
};
export default SendNotification;
