import * as React from "react";
import "./Component13.css";
import image from "../assets/image.png";
const Component13 = (props) => {
  return (
    <div className={`component-13 ${props.className || ""}`}>
      <img className="image" src={image} />
      <span className="kitchen">{props.kitchen || "Kitchen"}</span>
      <span className="num-15-devices">
        {props.num15Devices || "15 devices"}
      </span>
    </div>
  );
};
export default Component13;
