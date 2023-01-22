import * as React from "react";
import { useState } from "react";
import "./MainButtons.css";
import { useNavigate } from "react-router";
const MainButtons = (props) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState('');
  return (
    <button className={`main-buttons ${hover}`}
      onClick={() => navigate(props.link)}>

      <div className="vector"
        onMouseEnter={() => setHover('active')}
        onMouseLeave={() => setHover('')}
        onTouchStart={() => setHover('active')}
        onTouchEnd={() => setHover('')}
      >{props.mainButton || "Send Notification"}</div>

    </button>
  );
};
export default MainButtons;
