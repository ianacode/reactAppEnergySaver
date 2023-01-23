import * as React from "react";
import "./Rooms.css";
import image2 from "./assets/image2.svg";
import Room from "./components/Room";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddRoom from "./components/AddRoom";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";
import { useEffect } from "react";
import EnergySaving from "../../components/EnergySaving/EnergySaving";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
function Rooms(props) {

  const [home, setHome] = React.useState({});

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
      })
  }, []);

  const propsData = {
    component15: {
      andDevices: "and devices then",
      image2: image2,
      addRoom: "Add Room",
    },
  };
  return (
    <>
      <Header />
      <Breadcrumb label="Rooms" />
      <EnergySaving />
      <div className="rooms">
        <div className="rooms-flex-container-3">
          {home.rooms && home.rooms.map((room) => (
            <Room room={room} />
          ))}



          {loginService.isAdult() && (
            <AddRoom
              className="component-15-instance-1"
              {...propsData.component15}
            />
          )}




        </div>
      </div>
      <Footer />
    </>
  );
};
export default Rooms;
