import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./MainButtons.css";
const MainButtons = (props) => {

  const navigate = useNavigate();
  const [hover, setHover] = useState('');

  return (
    <button className={`main-buttons ${props.className || ""} ${hover}`} onClick={() => navigate('/adddevice')} >
      <div className="vector"
        onMouseEnter={() => setHover('active')}
        onMouseLeave={() => setHover('')}
        onTouchStart={() => setHover('active')}
        onTouchEnd={() => setHover('')}>
        {props.mainButton || "Add device"}</div>
    </button>
  );
};
export default MainButtons;
