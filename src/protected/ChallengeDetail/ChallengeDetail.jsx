import * as React from "react";
import {useEffect, useState} from "react";
import "./ChallengeDetail.css";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate, useParams} from "react-router";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";

const ChallengeDetail = () => {

  const { roomId, deviceId, challengeId } = useParams();
  console.log(roomId, deviceId, challengeId);
  const [home, setHome] = useState({});
  const [room, setRoom] = useState({});
  const [device, setDevice] = useState({});
  const [challenge, setChallenge] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
        const room = home.rooms.find((room) => room.id === roomId);
        const device = room && room.devices.find((device) => device.id === deviceId)
        const challenge = device && device.challenges.find((challenge) => challenge.id === challengeId)
        if (challenge) {
          setRoom(room);
          setDevice(device);
          setChallenge(challenge);
          console.log('challenge', challenge);

        } else {
          navigate("/page-not-found")
        }
      })
  }, []);

  function updateChallenge(event, objective) {
    setChallenge({
      ...challenge,
      objectives: challenge.objectives.map((obj) => {
        if (obj.id === objective.id) {
          return {
            ...obj,
            achieved: event.target.checked
          }
        }
        return obj;
      })
    });
  }


  useState(() => {
    console.log('challenge....', challenge);
  }, [challenge]);
  useState(() => {
    console.log('device', device);
  }, [device]);
  useState(() => {
    console.log('room', room);
  }, [room]);
  useState(() => {
    console.log('home', home);
  }, [home]);

  return (
    <>
      <Header />
      <Breadcrumb label="Challenges" />
      {challenge && challenge.objectives && (
      <div className="challenge-detail">

        {!challenge.objectives.every(objective => objective.achieved) && (
          <span className="not-completed-yet">Not completed yet:</span>
        )}
        {challenge.objectives.every(objective => objective.achieved) && (
          <span className="completed">Completed:</span>
        )}


        <div className="field">
          <div className="percentage" style={{
            flexBasis: `${challenge.objectives.filter(objective => objective.achieved).length / challenge.objectives.length * 100}%`
          }}>
            <span className="challenge-3">{ challenge.name }</span>
          </div>
        </div>

        <span className="objectives">Objectives:</span>

        {challenge.objectives.map(objective => (
          <label className="checkbox style-d" key={objective.id}>
            <input type="checkbox" defaultChecked={objective.achieved}
               onChange={(event) => updateChallenge(event, objective)} />
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">{objective.description}</div>
          </label>
        ))}

        <MainButtons
          className="main-buttons-instance-1"
          text="Save Data"
          handle={() => {
            console.log('save data');
            homeService.updateHome({
              ...home, rooms: home.rooms.map((room) => {
                if (room.id === roomId) {
                  return {
                    ...room, devices: room.devices.map((device) => {
                      if (device.id === deviceId) {
                        return {
                          ...device, challenges: device.challenges.map((c) => {
                            if (c.id === challengeId) {
                              return challenge;
                            }
                            return c;
                          })
                        }
                      }
                      return device;
                    })
                  }
                }
                return room;
              })
            }).then(() => {
              navigate(-1);
            });
          }}
        />
      </div>
      )}

      <Footer />
    </>
  );
};
export default ChallengeDetail;
