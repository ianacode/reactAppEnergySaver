import * as React from "react";
import "./Person.css";
import frame21112 from "../assets/frame21112.svg";
const Person = (props) => {
  return (
    <div className={`person-3 ${props.className || ""}`}>
      <img className="frame-2111-3" src={frame21112} />
      <span className="tom">{props.tom || "Tom"}</span>
    </div>
  );
};
export default Person;
