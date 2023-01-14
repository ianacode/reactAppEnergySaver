import * as React from "react";
import { useNavigate } from "react-router";
import "./Menu.css";
import otherstrendTwo from "../assets/otherstrendTwo.svg";
const Menu = (props) => {
  const navigate = useNavigate();
  return (
    <div className={`menu-2 ${props.className || ""}`}
        onClick={()=>navigate(props.link || '/')}>
      <img
        className="otherstrend-two"
        src={props.svg || otherstrendTwo}
      />
      <span>{props.label || "Ranking"}</span>
    </div>
  );
};
export default Menu;
