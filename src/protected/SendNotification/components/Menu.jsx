import * as React from "react";
import "./Menu.css";
import document from "../assets/document.svg";
const Menu = (props) => {
  return (
    <div className={`menu-2 ${props.className || ""}`}>
      <img className="document" src={props.document || document} alt={props.rooms || "Rooms"} />
      <span>{props.rooms || "Rooms"}</span>
    </div>
  );
};
export default Menu;
