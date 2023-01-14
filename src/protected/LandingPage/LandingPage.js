import * as React from "react";
import { useNavigate } from "react-router";
import "./LandingPage.css";
import document from "./assets/document.svg";
import vector from "./assets/vector.svg";
import home from "./assets/home.svg";
import otherstrendTwo from "./assets/otherstrendTwo.svg";
import thunderIllustration from "./assets/thunderIllustration.png";
import BtnLp from "./components/BtnLp";
import Btn from "./components/Btn";
import Menu from "./components/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function LandingPage(props) {
  const propsData = {
    btnConsumtion: {
      label: "CONSUMPTION",
      svg: vector
    },
    btnNotification: {
      label: "NOTIFICATIONS",
      svg: vector
    },
    btnChallenges: {
      label: "CHALLENGES",
      svg: vector
    },
    btnMembers: {
      label: "MEMBERS",
      svg: vector
    },
    // btnBack: {
    //   label: "Back",
    // },
    // menuRanking: {
    //   label: "Ranking",
    //   svg: otherstrendTwo,
    //   link: '/ranking'
    // },
    // menuHome: {
    //   label: "Home",
    //   svg: home,
    //   link: '/'
    // },
    // menuRooms: {
    //   label: "Rooms",
    //   svg: document,
    //   link: '/rooms'
    // },
  };
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="landing-page">
        <div className="energy-saving">
          <div className="flex-container-2">
            <span className="energy-saving-1">Energy Saving</span>
            <span className="num-35">+35%</span>
            <span className="num-235-k-wh">23.5 kWh</span>
          </div>
          <img className="thunder-illustration" src={thunderIllustration} />
        </div>
        <BtnLp className="btn-lp-instance-1" {...propsData.btnConsumtion} />
        <BtnLp className="btn-lp-1-instance" {...propsData.btnNotification} />
        <BtnLp className="btn-lp-2-instance" {...propsData.btnChallenges} />
        <BtnLp className="btn-lp-3-instance" {...propsData.btnMembers} />


        {/* <Btn className="btn-instance-1" {...propsData.btnBack} />
        <div className="flex-container-3">
          <Menu className="menu-1-instance-1" {...propsData.menuRanking} />
          <Menu className="menu-instance-1" {...propsData.menuHome} />
          <Menu className="menu-2-instance-1" {...propsData.menuRooms} />
        </div> */}



      </div>
      <Footer />
   
    </>
  );
};
export default LandingPage;
