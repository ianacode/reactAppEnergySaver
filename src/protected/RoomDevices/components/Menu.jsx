import * as React from "react";
import "./Menu.css";
import otherstrendTwo from "../assets/otherstrendTwo.svg";
const Menu = (props) => {
  return (
    <div className={`menu-2 ${props.className || ""}`}>
      <img
        className="otherstrend-two"
        src={props.otherstrendTwo || otherstrendTwo}
      />
      <span>{props.ranking || "Ranking"}</span>
    </div>
  );
};
export default Menu;
