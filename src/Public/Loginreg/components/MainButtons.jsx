import * as React from "react";
import { useNavigate } from "react-router";
import "./MainButtons.css";
const MainButtons = (props) => {
  const navigate = useNavigate();
  return (
    <button className={`main-buttons ${props.className || ""}`} onClick={()=>navigate(props.link)}>
      <div className="vector">{props.mainButton || "Login"}</div>
    </button>
  );
};
export default MainButtons;
