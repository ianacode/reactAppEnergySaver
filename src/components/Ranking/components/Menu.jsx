import * as React from "react";
import { useNavigate } from "react-router";
import "./Menu.css";

const Menu = (props) => {
  const navigate = useNavigate();
  return (
    <div className={`menu-2 ${props.className || ""}`}
            onClick={()=>navigate(props.link || '/')}>
      <img className="svg" src={props.svg } />
      <span>{props.label || "Ranking"}</span>
    </div>
  );
};
export default Menu;
