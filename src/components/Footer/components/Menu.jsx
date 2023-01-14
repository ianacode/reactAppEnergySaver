import * as React from "react";
import {useMatch, useNavigate, useResolvedPath} from "react-router";
import "./Menu.css";
const Menu = (props) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(props.link);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={`menu ${props.className} ${match ? 'active' : ''}`}
          onClick={()=>navigate(props.link)}>
      <img className="imageMenu" src={props.svg} />
      <span>{props.label}</span>
    </div>
  );
};
export default Menu;
