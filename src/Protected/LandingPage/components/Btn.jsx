import * as React from "react";
import { useNavigate } from "react-router";
import "./Btn.css";
const Btn = (props) => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  
  return (
    <div className={`btn ${props.className || ""}`} onClick={handleGoBack}>
      <span className="label">{props.label || "Back"}</span>
    </div>
  );
};
export default Btn;
