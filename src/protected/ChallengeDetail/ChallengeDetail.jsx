import * as React from "react";
import {useEffect} from "react";
import "./ChallengeDetail.css";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {useNavigate, useParams} from "react-router";
import homeService from "../../services/HomeService";
import loginService from "../../services/LoginService";
import {useDispatch, useSelector} from "react-redux";
import {setChallenge, setDevice, setHome, setRoom, updateChallenge} from "../../store/home-slice";

const ChallengeDetail = () => {

  const { roomId, deviceId, challengeId } = useParams();
  const navigate = useNavigate();
  const home = useSelector((state) => state.home.home);
  const challenge = useSelector((state) => state.home.challenge);
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
      if (home.rooms) {
        const room = home.rooms.find((room) => {
          console.log(room)
          return room.id === roomId
        });
        const device = room && room.devices.find((device) => device.id === deviceId)
        const challenge = device && device.challenges.find((challenge) => challenge.id === challengeId)
        if (challenge) {
          dispatch(setRoom(room));
          dispatch(setDevice(device));
          dispatch(setChallenge(challenge));
        } else {
          navigate("/rooms")
        }
      }
    }
  }, [home]);

  function updateObjective(event, objective) {
    dispatch(updateChallenge({
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
    }));
  }

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
               onChange={(event) => updateObjective(event, objective)} />
            <div className="checkbox__checkmark"></div>
            <div className="checkbox__body">{objective.description}</div>
          </label>
        ))}

        <MainButtons
          className="main-buttons-instance-1"
          text="Save Data"
          handle={() => {
            console.log('save data');
            homeService.updateHome(home).then(() => {
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
