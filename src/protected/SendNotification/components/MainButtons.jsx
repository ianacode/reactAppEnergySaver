import * as React from "react";
import "./MainButtons.css";
const MainButtons = (props) => {
  return (
    <button className={`main-buttons ${props.className || ""}`}>
      <div className="vector-1">{props.mainButton || "Send Notification"}</div>
    </button>
  );
};
export default MainButtons;
