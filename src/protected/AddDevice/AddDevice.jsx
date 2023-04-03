import * as React from "react";
import {useEffect, useState} from "react";
import "./AddDevice.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate, useParams} from "react-router";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";

function AddDevice() {
  const { roomId } = useParams();
  const navigate = useNavigate()
  const [hover, setHover] = useState('');

  const [home, setHome] = useState({});
  const [room, setRoom] = useState({});
  const [device, setDevice] = useState({
    id: 0,
    name: "",
    power: 0,
  });

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);

        const room = home.rooms.find((room) => +room.id === +roomId);
        if (room) {
          setRoom(room);

          // get max room if from home
          const maxId = room.devices.reduce((max, device) => {
            return +device.id > max ? +device.id : max;
          }, []);
          setDevice({...device, id: +maxId + 1});

        } else {
          navigate("/404")
        }
      })
  }, []);

  function submitForm(event) {
    // react will call this function when the form is submitted
    event.preventDefault();
    // set adult if dateOfBird is before 18 years ago
    room.devices.push(device)
    homeService.updateHome(home).then(() => {
      navigate(`/rooms/${roomId}/devices`);
    });
  }


  return (
    <>
      <Header />
      <Breadcrumb label="Devices" link={`/rooms/${roomId}/devices`} />
      <div className="adddevice">
        <input
          className="login-form-stroke"
          placeholder="Device name"
          type="text"
          value={device.name}
          onChange={(event) => setDevice({...device, name: event.target.value})}
        />
        <input
          className="login-form-stroke"
          placeholder="Power / Watts"
          type="number"
          value={device.power}
          onChange={(event) => setDevice({...device, power: +event.target.value})}
        />
        <button className={`main-buttons main-buttons-instance-1 ${hover}`}
                onClick={submitForm}>
          <div className="vector"
            onMouseEnter={() => setHover('active')}
            onMouseLeave={() => setHover('')}
            onTouchStart={() => setHover('active')}
            onTouchEnd={() => setHover('')}>
            Add device</div>
        </button>

      </div>
      <Footer />
    </>
  );
}
export default AddDevice;
