import * as React from "react";
import { useState } from "react";
import "./MainButtons.css";
const MainButtons = (props) => {
  const [hover, setHover] = useState('');
  return (
    <button className={`main-buttons ${props.className || ""} ${hover}`}>
      <div className="vector-1"
        onMouseEnter={() => setHover('active')}
        onMouseLeave={() => setHover('')}
        onTouchStart={() => setHover('active')}
        onTouchEnd={() => setHover('')}>
        {props.mainButton || "Send Notification"}</div>
    </button>
  );
};
export default MainButtons;
