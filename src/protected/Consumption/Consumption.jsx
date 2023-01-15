import * as React from "react";
import "./Consumption.css";
import component11 from "./assets/component11.svg";
import component16 from "./assets/component16.svg";
import vector3 from "./assets/vector3.svg";
import headerLine from "./assets/headerLine.svg";
import vector from "./assets/vector.svg";
import group1 from "./assets/group1.svg";
import icon from "./assets/icon.svg";
import home from "./assets/home.svg";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import group from "./assets/group.svg";
import document from "./assets/document.svg";
import vector2 from "./assets/vector2.svg";
import rectangle21 from "./assets/rectangle21.svg";
import MainButtons from "./components/MainButtons";
import Menu from "./components/Menu";
import Btn from "./components/Btn";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


const Consumption = () => {
  const propsData = {
    mainButtons1: {
      mainButton: "Send Notification",
      vector: vector,
    },
    mainButtons: {
      mainButton: "All devices",
      vector: vector,
    },
    btn: {
      label: "Back",
    },
    menu1: {
      ranking: "Ranking",
      otherstrendTwo: otherstrendTwo,
    },
    menu: {
      home: home,
      home: "Home",
    },
    menu2: {
      document: document,
      rooms: "Rooms",
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
