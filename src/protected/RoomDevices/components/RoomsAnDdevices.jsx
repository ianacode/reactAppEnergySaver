import * as React from "react";
import "./RoomsAnDdevices.css";
import iconEdit from "../assets/iconEdit.svg";
import iconTrash from "../assets/iconTrash.svg";
const RoomsAnDdevices = (props) => {
  return (
    <div className={`rooms-an-ddevices ${props.className || ""}`}>
      <div className="vector-1">
        <span>{props.kitchen || "Heater"}</span>
        <img className="icon-edit" src={props.iconEdit || iconEdit} />
        <img className="icon-trash" src={props.iconTrash || iconTrash} />
      </div>
    </div>
  );
};
export default RoomsAnDdevices;
