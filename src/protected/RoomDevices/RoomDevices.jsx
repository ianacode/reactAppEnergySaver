import * as React from "react";
import {useEffect} from "react";
import "./RoomDevices.css";
import RoomsDeviceDetail from "./components/RoomsDeviceDetail";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate, useParams} from "react-router";
import homeService from "../../services/HomeService";
import {useDispatch, useSelector} from "react-redux";
import {deleteDevice, setHome, setRoom} from "../../store/home-slice";

const RoomDevices = () => {
  const user = useSelector((state) => state.loggedUser.currentUser);
  const { roomId } = useParams();
  const navigate = useNavigate();
  const home = useSelector((state) => state.home.home);
  const room = useSelector((state) => state.home.room);
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
          if (room) {
            dispatch(setRoom(room));
          } else {
            navigate("/rooms")
          }
        }
      })
    }
  }, [home]);

  const propsData = {
    mainButtons: {
      mainButton: "Add device",
    },
  };
  return (
    <>
      <Header />
      <Breadcrumb label="Devices" link={`/rooms/${roomId}`} />
      <div className="RoomDevices">
        <div className="scroll-area">
          <img className="img" src={room.img} />
          <div className="flex-container-3">
            {room.devices && room.devices.map((device) => (
              <RoomsDeviceDetail
                key={device.id}
                className="rooms-an-ddevices-instance-1"
                device={device}
                deleteDevice={(device) => {
                  dispatch(deleteDevice(device.id));
                }}
              />
            ))}
          </div>
        </div>

        {user.role === 'adult' && (
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
