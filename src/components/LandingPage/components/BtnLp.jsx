import * as React from "react";
import { useNavigate } from "react-router";
import "./BtnLp.css";
const BtnLp = (props) => {
  const navigate = useNavigate();
  return (
    <button className={`btn-lp ${props.className || ""}`} style={{
      backgroundImage: props.svg
    }} onClick={()=>navigate(props.link || '/')}>
      <div className="vector">
        {props.label}
      </div>
    </button>
  );
};
export default BtnLp;
