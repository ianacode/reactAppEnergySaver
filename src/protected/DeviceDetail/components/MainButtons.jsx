import * as React from "react";
import "./MainButtons.css";
import {useNavigate} from "react-router";
const MainButtons = (props) => {
  const navigate = useNavigate();
  return (
    <button className="main-buttons" onClick={() => {
      if (props.link) {
        navigate(props.link)
      }
      if (props.onClick) {
        props.onClick()
      }
    }}>
      <div className="vector">{props.mainButton || "Send Notification"}</div>
    </button>
  );
};
export default MainButtons;
