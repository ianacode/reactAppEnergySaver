import * as React from "react";
import "./ChallengeDetail.css";
import checkbox1 from "./assets/checkbox1.svg";
import vector from "./assets/vector.svg";
import checkbox from "./assets/checkbox.svg";
import MainButtons from "./components/MainButtons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const ChallengeDetail = () => {
  const propsData = {
    mainButtons: {
      vector: vector,
      mainButton: "Save Data",
    },

  };
  return (
    <>
      <Header />
      <Breadcrumb label="Challenges" />
      <div className="challenge-detail">

       
        <span className="not-completed-yet">Not completed yet:</span>


    

        <div className="field">
          <div className="percentage">
            <span className="challenge-3">CHALLENGE 1</span>
          </div>
        </div>




        <span className="objectives">Objectives:</span>
        <div className="flex-container-3">
          <img className="checkbox-2" src={checkbox1} />
          <span>Disconnect the heating 3 times when it consumes too much</span>
        </div>
        <div className="flex-container-4">
          <img className="checkbox-1" src={checkbox1} />
          <span>Turn off the lights 10 times in case of notification</span>
        </div>
        <div className="flex-container-5">
          <img className="checkbox" src={checkbox1} />
          <span>
            Save 3 times water and send a notification
          </span>
        </div>
        <MainButtons
          className="main-buttons-instance-1"
          {...propsData.mainButtons}
        />

      </div>
      <Footer />
    </>
  );
};
export default ChallengeDetail;
