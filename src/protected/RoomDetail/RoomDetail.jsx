import * as React from "react";
import { useNavigate, useParams } from "react-router";
import "./RoomDetail.css";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SvgInfo from "./components/SvgInfo";
import loginService from "../../services/LoginService";
import homeService from "../../services/HomeService";
import { useEffect, useState } from "react";


const RoomDetail = () => {

  const { roomId } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState({});
  const [room, setRoom] = useState({});

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
        const room = home.rooms.find((room) => {
          console.log(room)
          return room.id === roomId
        });
        if (room) {
          setRoom(room);
        } else {
          navigate("/page-not-found")
        }
      })
  }, []);

  function deleteRoom() {
    home.rooms.splice(home.rooms.indexOf(room), 1);
    homeService.updateHome(home)
      .then(() => {
        navigate("/rooms")
      });
  }

  const propsData = {
    mainButtons: {
      mainButton: "Send Notification",
      link: "/sendnotification",
    },
    mainButtons1: {
      mainButton: "Challenges",
      link: "challenges",
    },
    mainButtons2: {
      mainButton: "Devices",
      link: `/rooms/${roomId}/devices`,
    },
    mainButtons3: {
      mainButton: "Delete room",
      onClick: deleteRoom,
    },
    metrics: [
      {
        title: "Electricity Expense", value: "20°C"
      },
      {
        title: "Water Expense", value: "27L"
      }
    ]
  };
  return (
    <>
      <Header />
      <Breadcrumb label={room.name} link={"/rooms"} />


        <div className="room-detail">
          <SvgInfo metrics={propsData.metrics} />
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

          {loginService.isAdult() && (
            <MainButtons
              className="main-buttons-3-instance"
              {...propsData.mainButtons3}
            />
          )}


      </div>


      <Footer />
    </>
  );
};
export default RoomDetail;
