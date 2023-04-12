import * as React from "react";
import {useNavigate, useParams} from "react-router";
import "./Challenges.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useEffect, useState} from "react";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";
import {useDispatch, useSelector} from "react-redux";
import {setDevice, setHome, setRoom} from "../../store/home-slice";
const Challenges = () => {

  const { roomId, deviceId } = useParams();
  const navigate = useNavigate();
  const home = useSelector((state) => state.home.home);
  const [challenges, setChallenges] = useState([]);
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
    if (home && home.rooms) {
      if (roomId) {
        const room = home.rooms.find((room) => room.id === roomId);
        if (deviceId){
          const device = room && room.devices.find((device) => device.id === deviceId)
          if (device) {
            if (!device.challenges){
              device.challenges = [];
            }
            setRoom(room);
            setDevice(device);
            setChallenges(device.challenges.map(challenge => {
              return {
                ...challenge,
                roomId: room.id,
                deviceId: device.id
              }
            }));
          } else {
            navigate("/page-not-found")
          }
        } else {
          setRoom(room);
          // all challenges from all devices in room
          setChallenges(room.devices.reduce((acc, device) => {
            if (device.challenges){
              return [...acc, ...device.challenges.map(challenge => {
                return {
                  ...challenge,
                  roomId: room.id,
                  deviceId: device.id
                }
              })];
            }
            return acc;
          }, []));
        }
      } else {
        // all challenges from all room and devices
        setChallenges(home.rooms.reduce((acc, room) => {
          return [...acc, ...room.devices.reduce((acc, device) => {
            if (device.challenges){
              return [...acc, ...device.challenges.map(challenge => {
                return {
                  ...challenge,
                  roomId: room.id,
                  deviceId: device.id
                }
              })];
            }
            return acc;
          }, [])];
        }, []));
      }
    }
  }, [home]);

  return (
    <>
      <Header />
      <Breadcrumb label="Challenges" />
      <div className="challenges">
        <span className="not-completed-yet">Not completed yet:</span>
        {challenges && challenges
          .filter(challenge => !challenge.objectives.every(objective => objective.achieved))
          .map((challenge) => {
          return (
          
            <div className="field-2" onClick={() => navigate(`/rooms/${challenge.roomId}/devices/${challenge.deviceId}/challenges/${challenge.id}`)}
                 key={challenge.roomId+challenge.deviceId+challenge.id}>
              <div className="percentage" style={{
                flexBasis: `${challenge.objectives.filter(objective => objective.achieved).length / challenge.objectives.length * 100 + 10}%`
              }}>
                <span className="challenge-3">{challenge.name}</span>
              </div>
            </div>
          )
        })}

        <span className="completed">Completed:</span>
        {challenges && challenges
          .filter(challenge => challenge.objectives.every(objective => objective.achieved))
          .map((challenge) => {
          return (
            <div className="field-2" onClick={() => navigate(`/rooms/${challenge.roomId}/devices/${challenge.deviceId}/challenges/${challenge.id}`)}
                 key={challenge.roomId+challenge.deviceId+challenge.id}>
              <div className="percentage-ful">
                <span className="challenge-3">{challenge.name}</span>
              </div>
            </div>
          )
          })}
      </div>
      <Footer />
    </>
  );
};
export default Challenges;
