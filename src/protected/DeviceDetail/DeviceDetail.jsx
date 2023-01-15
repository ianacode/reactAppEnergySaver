import * as React from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import "./DeviceDetail.css";
// import ellipse14 from "./assets/ellipse14.svg";
// import ellipse15 from "./assets/ellipse15.svg";
import vector from "./assets/vector.svg";


// import ellipse16 from "./assets/ellipse16.svg";



// import progress from "./assets/progress.svg";

// import ellipse13 from "./assets/ellipse13.svg";
import thermometer from "./assets/thermometer.svg";

// import ellipse11 from "./assets/ellipse11.svg";

import MainButtons from "./components/MainButtons";


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SvgInfo from "./components/SvgInfo";
import loginService from "../../services/LoginService";
import homeService from "../../services/HomeService";
import {useEffect, useState} from "react";


const DeviceDetail = () => {

  const { roomId, deviceId } = useParams();
  console.log(roomId, deviceId);
  const [home, setHome] = useState({});
  const [room, setRoom] = useState({});
  const [device, setDevice] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
        if (home.rooms){
          console.log(home.rooms)
          setRoom(home.rooms.find((r) => r.room_id === roomId));
          console.log(room);
          if (room.devices){
            setDevice(room.devices.find((device) => device.id === deviceId));
            console.log(device);
            if (device){
              return
            }
          }
        }
        navigate("/404")
      })
  }, []);

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
  };

  return (
      <>
      <Header />
      <Breadcrumb label={room?.room_name}/>
      <div className="room-detail">
        <div className="flex-container-3">
          <SvgInfo value="20°C" title="Electricity Expense" />
          <SvgInfo value="23L" title="Water Expense" />
        </div>
        <MainButtons
          className="main-buttons-instance-1"
          {...propsData.mainButtons}
        />
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
      </div>
      <Footer />
      </>
      )
};
export default DeviceDetail;
