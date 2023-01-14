import * as React from "react";
import "./Btn.css";
const Btn = (props) => {
  return (
    <div className={`btn ${props.className || ""}`}>
      <span className="label">{props.label || "Back"}</span>
    </div>
  );
};
export default Btn;
