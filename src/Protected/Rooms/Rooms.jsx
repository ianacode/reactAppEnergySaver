import * as React from "react";
import { useNavigate } from "react-router";
import "./Rooms.css";
import component16 from "./assets/component16.svg";
import image2 from "./assets/image2.svg";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import thunderIllustration from "./assets/thunderIllustration.png";
import component11 from "./assets/component11.svg";
import headerLine from "./assets/headerLine.svg";
import home from "./assets/home.svg";
import document from "./assets/document.svg";
import icon from "./assets/icon.svg";
import Component13 from "./components/Component13";
import Component12 from "./components/Component12";
import Component17 from "./components/Component17";
import Menu from "./components/Menu";
import Component15 from "./components/Component15";
import Btn from "./components/Btn";
import Header from "../components/Header/Header";
function Rooms(props) {

  function handleGoBack() {
    navigate(-1);
  }


  const propsData = {
    component13: {
      num15Devices: "15 devices",
      kitchen: "Kitchen",
    },
    component17: {
      livingRoom: "Living Room",
      num9Devices: "9 devices",
      // icon: icon,
    },
    component12: {
      num4Devices: "4 devices",
      smallBedroom: "Small Bedroom",
    },
    component15: {
      andDevices: "and devices",
      image2: image2,
      addRoom: "Add Room",
    },
    menuRanking: {
      label: "Ranking",
      svg: otherstrendTwo,
      link: '/ranking'
    },
    menuHome: {
      label: "Home",
      svg: home,
      link: '/'
    },
    menuRooms: {
      label: "Rooms",
      svg: document,
      link: '/rooms'
    },
  };
  const navigate = useNavigate();
  return (
    <>
      <Header/>
      <div className="rooms">
        <div className="ranking-flex-container-2" >
        <img className="icon" src={icon} onClick={handleGoBack}/>
        <span className="rooms-1">Rooms</span>
        </div>

        <div className="energy-saving">
          <div className="flex-container-2">
            <span className="energy-saving-1">Energy Saving</span>
            <span className="num-35">+35%</span>
            <span className="num-235-k-wh">23.5 kWh</span>
          </div>
          <img className="thunder-illustration" src={thunderIllustration} />
        </div>
        <div className="rooms-flex-container-3">
          <Component13
            className="component-13-instance-1"
            {...propsData.component13}
          />
          <Component17
            className="component-17-instance-1"
            {...propsData.component17}
          />
        </div>
        <div className="rooms-flex-container-4">
          <Component12
            className="component-12-instance-1"
            {...propsData.component12}
          />
          <Component15
            className="component-15-instance-1"
            {...propsData.component15}
          />
        </div>
        <Btn className="btn-instance-1" />
        <div className="rooms-flex-container-5">
          <Menu className="menu-1-instance-1" {...propsData.menuRanking} />
          <Menu className="menu-instance-1" {...propsData.menuHome} />
          <Menu className="menu-2-instance-1" {...propsData.menuRooms} />
        </div>
      </div>
    </>
  );
};
export default Rooms;
