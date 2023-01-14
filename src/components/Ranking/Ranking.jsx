import * as React from "react";
import { useNavigate } from "react-router";
import "./Ranking.css";
import line16 from "./assets/line16.svg";
import line19 from "./assets/line19.svg";
import headerLine from "./assets/headerLine.svg";
import home from "./assets/home.svg";
import rooms from "./assets/rooms.svg";
import ranking from "./assets/ranking.svg";
import vector from "./assets/vector.svg";
import rank2 from "./assets/rank2.svg";
import rank3 from "./assets/rank3.svg";
import avatar from "./assets/avatar.svg";
import alarm from "./assets/alarm.svg";
import icon from "./assets/icon.svg";
import Menu from "./components/Menu";
import Btn from "./components/Btn";


function Ranking(props) {


  function handleGoBack() {
    navigate(-1);
  }

  const propsData = {
    backBtn: {
      label: "Back",
    },
    menuRanking: {
      label: "Ranking",
      svg: ranking,
      link: '/ranking'
    },
    menuHome: {
      label: "Home",
      svg: home,
      link: '/'
    },
    menuRooms: {
      label: "Rooms",
      svg: rooms,
      link: '/rooms'
    },
  };
  const navigate = useNavigate();
  return (
    <div className="ranking">
      <div className="flex-container">
        <img className="avatar" src={avatar} onClick={()=>navigate('/members')} />
        <div className="flex-container-1">
          <span>Matthiew</span>
          <span className="data">Monday, 20 Jan</span>
        </div>
        <img className="alarm" src={alarm} />
      </div>
      <img className="header-line" src={headerLine} />
      
      <div className="ranking-flex-container-2" >
        <img className="icon" src={icon} onClick={handleGoBack}/>
        <span className="ranking-1">Ranking</span>
      </div>

      <span className="num-35-points">35 points</span>
      <div className="ranking-flex-container-3">
      {/* <div className="ranking-vector-conteiner">
        <img className="ranking-vector" src={rank2} />
        <img className="ranking-vector" src={vector} />
        <img className="ranking-vector" src={rank3} />
        </div> */}
        <div className="group-2085">
          <div className="ranking-vector-1">
            <span className="jrnbbpupzsuzo">2</span>
          </div>
          <div className="ranking-vector-3">
             <span className="opgklbcikbbig">1</span>
          </div>
          <div className="ranking-vector-2">
            <span className="xwxtwigvaatox">3</span>
          </div>
        </div>
      </div>
      <div className="rectangle-412">
        {/* <div className="cat-absolute-container">
          <span className="score">Score</span>
          <span className="num-123">123</span>
          <span className="num-78">78</span>
          <span className="num-54">54</span>
        </div> */}
       
        
       <table>
  <tr>
    <th>Username</th>
    <th>Score</th>
    <th>Rank</th>
  </tr>
  <tr>
    <td>Family 1</td>
    <td>123</td>
    <td>4</td>
  </tr>
  <tr>
    <td>Family 2</td>
    <td>78</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Family 3</td>
    <td>54</td>
    <td>6</td>
  </tr>
</table>


        {/* <span className="username">Username</span>
        <span className="score">Score</span>
        <span className="rank">Rank</span>

        <img className="line-19" src={line19} />
        <span className="family-1">Family 1</span>
        <span className="xfmnhlinybjyh">4</span>

        <img className="line-19" src={line19} />
        <span className="xxpvaptjtkezd">5</span>
        <span className="family-2">Family 2</span>

        <img className="line-19" src={line19} />
        <span className="family-3">Family 3</span>
        <span className="droztchtohtat">6</span> */}
      </div>


      <Btn className="back-btn-instance-1" {...propsData.backBtn} />
      <div className="flex-container-4">
        <Menu className="ranking-menu-instance-1" {...propsData.menuRanking} />
        <Menu className="home-menu-instance-1" {...propsData.menuHome} />
        <Menu className="rooms-menu-instance-1" {...propsData.menuRooms} />
      </div>
    </div>
  );
};
export default Ranking;
