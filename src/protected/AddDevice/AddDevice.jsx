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
import {addDevice, setDevice, setHome, setRoom} from "../../store/home-slice";
import {useDispatch, useSelector} from "react-redux";


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
  const navigate = useNavigate();
  const home = useSelector((state) => state.home.home);
  const device = useSelector((state) => state.home.device);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!home.id) {
      homeService.getHome(loginService.userAuthenticated().home_id)
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
    }
  }, [home]);

  useEffect(() => {
    if (device.id) {
      console.log('updateDevice', device)
      homeService.updateHome(home).then(() => {
        navigate(`/rooms/${roomId}/devices`)
      })
    }
  }, [device]);

  const [hover, setHover] = useState('');

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

    dispatch(addDevice({...device, challenges: new_challenges_for_device(device.name)}));
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
          onChange={(event) => dispatch(setDevice({...device, name: event.target.value}))}
        />
        <input
          className="login-form-stroke"
          placeholder="Power / Watts"
          type="number"
          value={device.power}
          onChange={(event) => dispatch(setDevice({...device, power: +event.target.value}))}
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
