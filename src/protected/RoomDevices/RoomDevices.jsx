import * as React from "react";
import "./RoomDevices.css";
import iconEdit from "./assets/iconEdit.svg";
import img from "./assets/img.png";
import iconTrash from "./assets/iconTrash.svg";
import vector from "./assets/vector.svg";
import RoomsDeviceDetail from "./components/RoomsDeviceDetail";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate, useParams} from "react-router";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";
import {useEffect, useState} from "react";
const RoomDevices = () => {

  const { roomId } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState({});
  const [room, setRoom] = useState({});

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
        const room = home.rooms.find((room) => room.room_id === roomId);
        if (room) {
          setRoom(room);
        } else {
          navigate("/404")
        }
      })
  }, []);

  const propsData = {
    mainButtons: {
      mainButton: "Add device",
      vector: vector,
    },
  };
  return (
    <>
      <Header />
      <Breadcrumb label="Devices" />
      <div className="RoomDevices">
        <img className="img" src={img} />
        <div className="flex-container-3">
          {room.devices && room.devices.map((device) => (
            <RoomsDeviceDetail
              className="rooms-an-ddevices-instance-1"
              device={device}
            />
          ))}
        </div>


        {loginService.isAdult() && (
        <MainButtons
          className="main-buttons-instance-1"
          {...propsData.mainButtons}
        />
        )}



      </div>


      <Footer />
    </>
  );
};
export default RoomDevices;
