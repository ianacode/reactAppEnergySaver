import * as React from "react";
import { useNavigate } from "react-router";
import "./Menu.css";
const Menu = (props) => {
  const navigate = useNavigate();
  return (
    <div className={`menu ${props.className}`} 
          onClick={()=>navigate(props.link || '/')}>
      <img className="imageMenu" src={props.svg} />
      <span>{props.label}</span>
    </div>
  );
};
export default Menu;
