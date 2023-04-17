import * as React from "react";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import "./DeviceDetail.css";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SvgInfo from "./components/SvgInfo";
import homeService from "../../services/HomeService";
import {useDispatch, useSelector} from "react-redux";
import {deleteDevice, setDevice, setHome, setRoom} from "../../store/home-slice";


const DeviceDetail = () => {

  const user = useSelector((state) => state.loggedUser.currentUser);
  const { roomId, deviceId } = useParams();
  const navigate = useNavigate();
  const home = useSelector((state) => state.home.home);
  const device = useSelector((state) => state.home.device);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!home.id) {
      homeService.getHome(user.home_id)
        .then((home) => {
          dispatch(setHome(home));
        })
    } else {
      dispatch(setHome(home));
    }
  }, []);

  useEffect(() => {
    if (home) {
      console.log('updateHome', home)
      homeService.updateHome(home).then(() => {
        if (home.rooms) {
          const room = home.rooms.find((room) => {
            console.log(room)
            return room.id === roomId
          });
          const device = room && room.devices.find((device) => device.id === deviceId)
          if (device) {
            dispatch(setRoom(room));
            dispatch(setDevice(device));
          } else {
            navigate("/rooms")
          }
        }
      })
    }
  }, [home]);

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
      mainButton: "Delete device",
      onClick: () => {
        dispatch(deleteDevice(deviceId));
      },
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
      <Breadcrumb label={device.name} link={`/rooms/${roomId}/devices`} />
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


        {user.role === 'adult' && (
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
