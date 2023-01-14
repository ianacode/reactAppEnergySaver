import * as React from "react";
import './Header.css';
import {useNavigate} from "react-router";
import component11 from "./assets/component11.svg";
import headerLine from "./assets/headerLine.svg";
import loginService from "../../services/LoginService";
function Header(props) {
  const user = loginService.userAuthenticated();
  const navigate = useNavigate();

  function today() {
    // Monday, 20 Jan
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    return `${weekday}, ${day} ${month}`;
  }

   return (
      <div className="header">
        <div className="flex-container">
          <img className="component-16" src={user.img} onClick={()=>navigate('/members')} />
          <div className="flex-container-1">
            <span>{user.name.first} {user.name.last}</span>
            <span className="monday-20-jan">{today()}</span>
          </div>
          <img className="component-11" src={component11} />
        </div>
        <img className="header-line" src={headerLine} />
      </div>
   );
}

export default Header;
