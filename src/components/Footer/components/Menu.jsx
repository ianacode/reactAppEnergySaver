import * as React from "react";
import {useMatch, useNavigate, useResolvedPath} from "react-router";
import "./Menu.css";
const Menu = (props) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(props.link);
  const match = useMatch({ path: resolved.pathname, end: true });
  const [hover, setHover] = React.useState('');

  return (
    <div className={`menu ${props.className} ${match ? 'active' : ''} ${hover}`}
         onClick={() => navigate(props.link)}
         onMouseEnter={() => setHover('active')}
         onMouseLeave={() => setHover('')}
         onTouchStart={() => setHover('active')}
         onTouchEnd={() => setHover('')}>
      <img className="imageMenu" src={props.svg} alt={props.label} />
      <span>{props.label}</span>
    </div>
  );
};
export default Menu;
