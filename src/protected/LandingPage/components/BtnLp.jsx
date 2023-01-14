import * as React from "react";
import { useNavigate } from "react-router";
import "./BtnLp.css";
import {useState} from "react";
const BtnLp = (props) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState('');
  return (
    <button className={`btn-lp ${props.className || ""} ${hover}`}
         onMouseEnter={() => setHover('active')}
         onMouseLeave={() => setHover('')}
         onTouchStart={() => setHover('active')}
         onTouchEnd={() => setHover('')}>
      <div className="lp-vector">
        {props.label}
      </div>
    </button>
  );
};
export default BtnLp;
