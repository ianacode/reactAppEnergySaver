import * as React from "react";
import "./MainButtons.css";
const MainButtons = (props) => {
  return (
    <button className={`main-buttons ${props.className || ""}`}>
      <div className="members-vector">{props.mainButton || "Add member"}</div>
    </button>
  );
};
export default MainButtons;
