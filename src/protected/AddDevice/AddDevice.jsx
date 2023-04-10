import * as React from "react";
import {useEffect, useState} from "react";
import "./AddDevice.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate, useParams} from "react-router";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";
import { v4 as uuidv4 } from 'uuid';


const NEW_DEVICE_CHALLENGES = [
  {
    id: uuidv4(),
    name: "Challenge 1",
    objectives: [
      {
        id: uuidv4(),
        name: "Objective 1",
        description: "Description 1",
      },
      {
        id: uuidv4(),
        name: "Objective 2",
        description: "Description 2",
      },
      {
        id: uuidv4(),
        name: "Objective 3",
        description: "Description 3",
      },
      {
        id: uuidv4(),
        name: "Objective 4",
        description: "Description 4",
      },
    ]},
  {
    id: uuidv4(),
    name: "Challenge 2",
    objectives: [
      {
        id: uuidv4(),
        name: "Objective 5",
        description: "Description 5",
      },
      {
        id: uuidv4(),
        name: "Objective 6",
        description: "Description 6",
      },
      {
        id: uuidv4(),
        name: "Objective 7",
        description: "Description 7",
      }
    ]},
  {
    id: uuidv4(),
    name: "Challenge 3",
    objectives: [
      {
        id: uuidv4(),
        name: "Objective 8",
        description: "Description 8",
      }
    ]},
  {
    id: uuidv4(),
    name: "Challenge 4",
    objectives: [
      {
        id: uuidv4(),
        name: "Objective 9",
        description: "Description 9",
      },
      {
        id: uuidv4(),
        name: "Objective 10",
        description: "Description 10",
      }
    ]}
];

function AddDevice() {
  const { roomId } = useParams();
  const navigate = useNavigate()
  const [hover, setHover] = useState('');

  const [home, setHome] = useState({});
  const [room, setRoom] = useState({});
  const [device, setDevice] = useState({
    id: "",
    name: "",
    power: 0,
  });

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
        console.log(home)
        const room = home.rooms.find((room) => room.id === roomId);
        if (room) {
          if (!room.devices) {
            room.devices = [];
          }
          setRoom(room);
          setDevice({...device, id: uuidv4()});

        } else {
          navigate("/404")
        }
      })
  }, []);

  function submitForm(event) {
    // react will call this function when the form is submitted
    event.preventDefault();
    // set adult if dateOfBird is before 18 years ago

    function new_challenges_for_device(name) {
      // TODO choose the right challenges for device type
      // for now, we assume this the device has all challenges
      return NEW_DEVICE_CHALLENGES.map((challenge) => {
        return {
          id: challenge.id,
          name: name + ': ' + challenge.name,
          objectives: challenge.objectives.map((objective) => {
            return {
              id: objective.id,
              name: objective.name + ' for ' + name,
              description: objective.description,
              achieved: false,
            }
          })
        }
      })
    }

    device.challenges = new_challenges_for_device(device.name);
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
