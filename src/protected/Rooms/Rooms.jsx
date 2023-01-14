import * as React from "react";
import { useNavigate } from "react-router";
import "./Rooms.css";
import image2 from "./assets/image2.svg";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import thunderIllustration from "./assets/thunderIllustration.png";
import home from "./assets/home.svg";
import document from "./assets/document.svg";
import icon from "./assets/icon.svg";
import Room from "./components/Room";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddRoom from "./components/AddRoom";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";
import {useEffect} from "react";
function Rooms(props) {

  const [home, setHome] = React.useState({});

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
      })
  }, []);

  function handleGoBack() {
    navigate(-1);
  }


  const propsData = {
    component15: {
      andDevices: "and devices",
      image2: image2,
      addRoom: "Add Room",
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
          {home.rooms && home.rooms.map((room) => (
            <Room room={room} />
          ))}
          <AddRoom
            className="component-15-instance-1"
            {...propsData.component15}
          />
        </div>
        {/* <Btn className="btn-instance-1" />
        <div className="rooms-flex-container-5">
          <Menu className="menu-1-instance-1" {...propsData.menuRanking} />
          <Menu className="menu-instance-1" {...propsData.menuHome} />
          <Menu className="menu-2-instance-1" {...propsData.menuRooms} />
        </div> */}
      </div>
      <Footer />
    </>
  );
};
export default Rooms;
