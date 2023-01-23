import * as React from "react";
import { useNavigate, useParams } from "react-router";
import "./DeviceDetail.css";
import vector from "./assets/vector.svg";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SvgInfo from "./components/SvgInfo";
import loginService from "../../services/LoginService";
import homeService from "../../services/HomeService";
import { useEffect, useState } from "react";


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
        const room = home.rooms.find((room) => room.id === +roomId);
        const device = room && room.devices.find((device) => device.id === +deviceId)
        if (device) {
          setRoom(room);
          setDevice(device);
        } else {
          navigate("/page-not-found")
        }
      })
  }, []);

  const propsData = {
    mainButtons: {
      vector: vector,
      mainButton: "Send Notification",
      link: "/sendnotification",
    },
    mainButtons1: {
      vector: vector,
      mainButton: "Challenges",
      link: "/challenges",
    },
    mainButtons2: {
      vector: vector,
      mainButton: "Delete device",
    },

    metrics: [
      {
        title: "Electricity Expense", value: "20°C"
      },
      // {
      //   title: "Water Expense", value: "27L"
      // }
    ]
  };

  return (
    <>
      <Header />
      <Breadcrumb label={device.name} />
      <div className="device-detail">
        <SvgInfo metrics={propsData.metrics} />
        <MainButtons
          className="main-buttons-instance-1"
          {...propsData.mainButtons}
        />
        <MainButtons
          className="main-buttons-1-instance"
          {...propsData.mainButtons1}
        />


        {loginService.isAdult() && (
          <MainButtons
            className="main-buttons-2-instance"
            {...propsData.mainButtons2}
          />
        )}


      </div>
      <Footer />
    </>
  )
};
export default DeviceDetail;
