import * as React from "react";
import "./Ranking.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


function Ranking() {

  return (
    <>
      <Header/>
      <Breadcrumb label="Ranking"/>
      <div className="ranking">
        <span className="num-35-points">35 points</span>
        <div className="ranking-flex-container-3">
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
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Ranking;
