import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./MainButtons.css";
const MainButtons = (props) => {

  const navigate = useNavigate();
  const [hover, setHover] = useState('');

  return (
    <button className={`main-buttons ${props.className || ""} ${hover}`} onClick={() => navigate(props.link)} >
      <div className="vector"
      onMouseEnter={() => setHover('active')}
      onMouseLeave={() => setHover('')}
      onTouchStart={() => setHover('active')}
      onTouchEnd={() => setHover('')}>
        {props.mainButton || "All devices"}</div>
    </button>
  );
};
export default MainButtons;
