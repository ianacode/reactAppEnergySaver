import * as React from "react";
import "./LandingPage.css";
import vector from "./assets/vector.svg";
import BtnLp from "./components/BtnLp";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EnergySaving from "../../components/EnergySaving/EnergySaving";


function LandingPage() {
  const propsData = {
    btnConsumtion: {
      label: "CONSUMPTION",
      svg: vector,
      link: "/consumption",
    },
    btnNotification: {
      label: "NOTIFICATIONS",
      svg: vector,
      link: "/notifications"
    },
    btnChallenges: {
      label: "CHALLENGES",
      svg: vector,
      link: "/challenges"
    },
    btnMembers: {
      label: "MEMBERS",
      svg: vector,
      link: "/members"
    },
  };

  return (
    <>
      <Header />
      <EnergySaving />
      <div className="landing-page">
        <BtnLp className="btn-lp-instance-1" {...propsData.btnConsumtion} />
        <BtnLp className="btn-lp-1-instance" {...propsData.btnNotification} />
        <BtnLp className="btn-lp-2-instance" {...propsData.btnChallenges} />
        <BtnLp className="btn-lp-3-instance" {...propsData.btnMembers} />
      </div>
      <Footer />

    </>
  );
}
export default LandingPage;
