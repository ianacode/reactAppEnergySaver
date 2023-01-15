import * as React from "react";
import { useNavigate } from "react-router";
import "./Btn.css";
import {useState} from "react";
const Btn = (props) => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const [hover, setHover] = useState('');

  return (
    <div className={`btn ${props.className || ""} ${hover}`}
         onClick={handleGoBack}
         onMouseEnter={() => setHover('hover')}
         onMouseLeave={() => setHover('')}
         onTouchStart={() => setHover('hover')}
         onTouchEnd={() => setHover('')}>
      <span className="label">{props.label || "Back"}</span>
    </div>
  );
};
export default Btn;
