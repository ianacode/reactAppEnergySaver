import * as React from "react";
import { useParams } from "react-router";
import "./RoomDetail.css";
import ellipse14 from "./assets/ellipse14.svg";
import ellipse15 from "./assets/ellipse15.svg";
import vector from "./assets/vector.svg";
import ellipse16 from "./assets/ellipse16.svg";
import headerLine from "./assets/headerLine.svg";
import component11 from "./assets/component11.svg";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import progress from "./assets/progress.svg";
import home from "./assets/home.svg";
import ellipse13 from "./assets/ellipse13.svg";
import thermometer from "./assets/thermometer.svg";
import document from "./assets/document.svg";
import component16 from "./assets/component16.svg";
import ellipse11 from "./assets/ellipse11.svg";
import icon from "./assets/icon.svg";
import MainButtons from "./components/MainButtons";
import Btn from "./components/Btn";
import Menu from "./components/Menu";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const RoomDetail = () => {

  const { roomId } = useParams();

  const propsData = {
    mainButtons: {
      vector: vector,
      mainButton: "Send Notification",
    },
    mainButtons1: {
      vector: vector,
      mainButton: "Challenges",
    },
    mainButtons2: {
      vector: vector,
      mainButton: "Devices",
    },
    mainButtons3: {
      vector: vector,
      mainButton: "Delete room",
    },
    // btn: {
    //   label: "Back",
    // },
    // menu1: {
    //   ranking: "Ranking",
    //   otherstrendTwo: otherstrendTwo,
    // },
    // menu: {
    //   home: "Home",
    //   home: home,
    // },
    // menu2: {
    //   document: document,
    //   rooms: "Rooms",
    // },
  };
  return (
    <>
    <Header />
    <div className="kitchen">

      {/* <div className="flex-container">
        <img className="component-16" src={component16} />
        <div className="flex-container-1">
          <span className="matthiew">Matthiew</span>
          <span className="monday-20-jan">Monday, 20 Jan</span>
        </div>
        <img className="component-11" src={component11} />
      </div>
      <img className="header-line" src={headerLine} /> */}

      <div className="flex-container-2">
        <img className="icon" src={icon} />
        <span className="kitchen-1">kitchen</span>
      </div>
      <div className="flex-container-3">
        <div className="flex-container-4">
          <div className="flex-container-5">
            <img className="ellipse-16" src={ellipse16} />
            <img className="ellipse-11" src={ellipse11} />
            <div className="cat-absolute-container">
              <img className="progress" src={progress} />
              <div className="cat-absolute-container-1">
                <div className="cat-absolute-container-2">
                  <img className="ellipse-15" src={ellipse15} />
                  <span className="kitchen-2">kitchen</span>
                  <span className="num-0-1-2-3-4-5-6-7-8">
                    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 28 28ºC
                  </span>
                  <span className="electricity-expense">
                    Electricity Expense
                  </span>
                  <span className="ltnvrkvyhfuyn">􀥲</span>
                </div>
                <img className="ellipse-14" src={ellipse14} />
              </div>
              <img className="ellipse-13" src={ellipse13} />
            </div>
          </div>
          <MainButtons
            className="main-buttons-instance-1"
            {...propsData.mainButtons}
          />
        </div>
        <img className="thermometer" src={thermometer} />
      </div>
      <MainButtons
        className="main-buttons-1-instance"
        {...propsData.mainButtons1}
      />
      <MainButtons
        className="main-buttons-2-instance"
        {...propsData.mainButtons2}
      />
      <MainButtons
        className="main-buttons-3-instance"
        {...propsData.mainButtons3}
      />

      {/* <Btn className="btn-instance-1" {...propsData.btn} />
      <div className="flex-container-6">
        <Menu className="menu-1-instance-1" {...propsData.menu1} />
        <Menu className="menu-instance-1" {...propsData.menu} />
        <Menu className="menu-2-instance-1" {...propsData.menu2} />
      </div> */}

    </div>
    <Footer />
    </>
  );
};
export default RoomDetail;
