import * as React from "react";
import "./Component17.css";
import image1 from "../assets/image1.png";
const Component17 = (props) => {
  return (
    <div className={`component-17 ${props.className || ""}`}>
      <img className="image-1" src={image1} />
      <span className="living-room">{props.livingRoom || "Living Room"}</span>
      <span className="num-9-devices">{props.num9Devices || "9 devices"}</span>
    </div>
  );
};
export default Component17;
