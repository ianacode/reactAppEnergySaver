import * as React from "react";
import "./AddRoom.css";
import image2 from "../assets/image2.svg";

const AddRoom = (props) => {
  return (
    <div className={`component-15 ${props.className || ""}`}>
      <img className="image-2" src={props.image2 || image2} />
      <div className="flex-container-6">
        <span className="add-room">{props.addRoom || "Add Room"}</span>

        <span className="and-devices">{props.andDevices || "and devices"}</span>
      </div>
    </div>
  );
};
export default AddRoom;
