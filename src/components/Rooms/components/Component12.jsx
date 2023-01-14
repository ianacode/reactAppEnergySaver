import * as React from "react";
import "./Component12.css";
import image1 from "../assets/image1.png";
const Component12 = (props) => {
  return (
    <div className={`component-12 ${props.className || ""}`}>
      <img className="image-2" src={image1} />
      <span className="small-bedroom">
        {props.smallBedroom || "Small Bedroom"}
      </span>
      <span className="num-4-devices">{props.num4Devices || "4 devices"}</span>
    </div>
  );
};
export default Component12;
