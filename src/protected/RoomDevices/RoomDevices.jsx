import * as React from "react";
import "./RoomDevices.css";
import component16 from "./assets/component16.svg";
import icon from "./assets/icon.svg";
import home from "./assets/home.svg";
import headerLine from "./assets/headerLine.svg";
import iconEdit from "./assets/iconEdit.svg";
import img from "./assets/img.png";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import iconTrash from "./assets/iconTrash.svg";
import vector from "./assets/vector.svg";
import component11 from "./assets/component11.svg";
import document from "./assets/document.svg";
import Menu from "./components/Menu";
import RoomsAnDdevices from "./components/RoomsAnDdevices";
import MainButtons from "./components/MainButtons";
import Btn from "./components/Btn";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const RoomDevices = () => {
  const propsData = {
    roomsAnDdevices: {
      iconEdit: iconEdit,
      kitchen: "Heater",
      iconTrash: iconTrash,
    },
    roomsAnDdevices1: {
      iconTrash: iconTrash,
      iconEdit: iconEdit,
      kitchen: "Device 2",
    },
    roomsAnDdevices2: {
      kitchen: "Device 3",
      iconTrash: iconTrash,
      iconEdit: iconEdit,
    },
    roomsAnDdevices3: {
      iconEdit: iconEdit,
      iconTrash: iconTrash,
      kitchen: "Device 4",
    },
    mainButtons: {
      mainButton: "Add device",
      vector: vector,
    },
    btn: {
      label: "Back",
    },
    menu1: {
      otherstrendTwo: otherstrendTwo,
      ranking: "Ranking",
    },
    menu: {
      home: "Home",
      home: home,
    },
    menu2: {
      document: document,
      rooms: "Rooms",
    },
  };
  return (
    <>
      <Header />
      <Breadcrumb label="Devices" />
      <div className="RoomDevices">
        
        <img className="img" src={img} />


        <div className="flex-container-3">
          <RoomsAnDdevices
            className="rooms-an-ddevices-instance-1"
            {...propsData.roomsAnDdevices}
          />
          <RoomsAnDdevices
            className="rooms-an-ddevices-1-instance"
            {...propsData.roomsAnDdevices1}
          />
          <RoomsAnDdevices
            className="rooms-an-ddevices-2-instance"
            {...propsData.roomsAnDdevices2}
          />
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
export default RoomDevices;
