import * as React from "react";
import { useNavigate } from "react-router";
import "./Challenges.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const Challenges = () => {

  const navigate = useNavigate();


  // const propsData = {
  //   btn: {
  //     label: "Back",
  //   },
  //   menu1: {
  //     ranking: "Ranking",
  //     otherstrendTwo: otherstrendTwo,
  //   },
  //   menu: {
  //     home: home,
  //     home: "Home",
  //   },
  //   menu2: {
  //     document: document,
  //     rooms: "Rooms",
  //   },
  // };
  return (
    <>
      <Header />
      <Breadcrumb label="Challenges" />
      <div className="challenges">


        <span className="not-completed-yet">Not completed yet:</span>

         <div className="field-2" onClick={() => navigate('/challenges/1')} >
          <div className="percentage">
            <span className="challenge-3">CHALLENGE 1</span>
          </div>
        </div>

        <div className="field-2" onClick={() => navigate('/challenges/2')}>
          <div className="percentage">
            <span className="challenge-3">CHALLENGE 2</span>
          </div>
        </div>
        
        
        <div className="field-2" onClick={() => navigate('/challenges/3')}>
          <div className="percentage">
            <span className="challenge-3">CHALLENGE 3</span>
          </div>
        </div>


        <span className="completed">Completed:</span>

        <div className="field-2" onClick={() => navigate('/challenges/4')}>
          <div className="percentage-ful">
            <span className="challenge-3">CHALLENGE 4</span>
          </div>
        </div>


      </div>
      <Footer />
    </>
  );
};
export default Challenges;
