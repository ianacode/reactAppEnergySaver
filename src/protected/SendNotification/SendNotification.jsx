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
import NotificationSent from "../../components/NotificationSent/NotificationSent";
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




        <label class="checkbox style-d">
          <input type="checkbox" />
          <div class="checkbox__checkmark"></div>
          <div class="checkbox__body">All members of the family</div>
        </label>

        <label class="checkbox style-d">
          <input type="checkbox" />
          <div class="checkbox__checkmark"></div>
          <div class="checkbox__body">Tom</div>
        </label>

        <label class="checkbox style-d">
          <input type="checkbox" />
          <div class="checkbox__checkmark"></div>
          <div class="checkbox__body">Anna</div>
        </label>

        <label class="checkbox style-d">
          <input type="checkbox" />
          <div class="checkbox__checkmark"></div>
          <div class="checkbox__body">Silvia</div>
        </label>





        <MainButtons
          className="main-buttons-instance-1"
          {...propsData.mainButtons}
        />

        {/* <NotificationSent /> */}

      </div>
      <Footer />
    </>
  );
};
export default SendNotification;
