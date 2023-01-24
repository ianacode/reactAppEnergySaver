import * as React from "react";
import { useState } from "react";
import {useNavigate, useParams} from "react-router";
import "./MainButtons.css";
const MainButtons = (props) => {

  const { roomId } = useParams();
  const navigate = useNavigate();
  const [hover, setHover] = useState('');

  return (
    <button className={`main-buttons ${props.className || ""} ${hover}`} onClick={() => navigate('/rooms/'+roomId+'/adddevice')} >
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
