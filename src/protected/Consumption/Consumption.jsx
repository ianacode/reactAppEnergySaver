import * as React from "react";
import "./Consumption.css";
import vector3 from "./assets/vector3.svg";
import group1 from "./assets/group1.svg";
import group from "./assets/group.svg";
import vector2 from "./assets/vector2.svg";
import rectangle21 from "./assets/rectangle21.svg";
import MainButtons from "./components/MainButtons";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


const Consumption = () => {

  const propsData = {
    mainButtons1: {
      mainButton: "Send Notification",
      link: "/sendnotification",
    },
    mainButtons: {
      mainButton: "All devices",
      link: "/alldevices",
    },
  };
  return (
    <>
    <Header />
    <Breadcrumb label="Consumption"/>

    <div className="consumption">

    


    
      <span className="electricity">Electricity</span>
      <img className="vector-3" src={vector3} />
      <div className="flex-container-3">
        <img className="rectangle-22" src={rectangle21} />
        <img className="group-1" src={group1} />
      </div>
      <span className="water">Water </span>
      <img className="vector-2" src={vector2} />
      <div className="flex-container-4">
        <img className="rectangle-21" src={rectangle21} />
        <img className="group" src={group} />
      </div>
      <MainButtons
        className="main-buttons-1-instance"
        {...propsData.mainButtons1}
      />
      <MainButtons
        className="main-buttons-instance-1"
        {...propsData.mainButtons}
      />
    
    </div>
    <Footer />
    </>
  );
};
export default Consumption;
