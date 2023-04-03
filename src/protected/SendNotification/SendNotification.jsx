import * as React from "react";
import "./SendNotification.css";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const SendNotification = () => {
  const propsData = {
    mainButtons: {
      mainButton: "Send Notification",
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




        <label className="checkbox style-d">
          <input type="checkbox" />
          <div className="checkbox__checkmark"></div>
          <div className="checkbox__body">All members of the family</div>
        </label>

        <label className="checkbox style-d">
          <input type="checkbox" />
          <div className="checkbox__checkmark"></div>
          <div className="checkbox__body">Tom</div>
        </label>

        <label className="checkbox style-d">
          <input type="checkbox" />
          <div className="checkbox__checkmark"></div>
          <div className="checkbox__body">Anna</div>
        </label>

        <label className="checkbox style-d">
          <input type="checkbox" />
          <div className="checkbox__checkmark"></div>
          <div className="checkbox__body">Silvia</div>
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
