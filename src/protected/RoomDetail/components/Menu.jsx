import * as React from "react";
import "./Menu.css";
import home from "../assets/home.svg";
const Menu = (props) => {
  return (
    <div className={`menu-2 ${props.className || ""}`}>
      <img className="home" src={props.home || home} />
      <span className="home-1">{props.home || "Home"}</span>
    </div>
  );
};
export default Menu;
