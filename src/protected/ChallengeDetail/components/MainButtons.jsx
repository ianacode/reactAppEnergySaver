import * as React from "react";
import { useState } from "react";
import "./MainButtons.css";
const MainButtons = (props) => {
  const [hover, setHover] = useState('');
  return (
    <button className={`main-buttons ${props.className || ""} ${hover}`}>
      <div className="vector"
        onMouseEnter={() => setHover('active')}
        onMouseLeave={() => setHover('')}
        onTouchStart={() => setHover('active')}
        onTouchEnd={() => setHover('')}
      onClick={(event) => {
        if (props.handle) {
          event.preventDefault()
          props.handle();
        }
      }}>
        {props.mainButton || "Save Data"}</div>
    </button>
  );
};
export default MainButtons;
