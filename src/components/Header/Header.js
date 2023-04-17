import * as React from "react";
import { useState } from "react";
import './Header.css';
import { useNavigate } from "react-router";
import component11 from "./assets/component11.svg";
import headerLine from "./assets/headerLine.svg";
import {useSelector} from "react-redux";
function Header() {
  const user = useSelector((state) => state.loggedUser.currentUser);
  const navigate = useNavigate();
  const [hover, setHover] = useState('');
  const [hover2, setHover2] = useState('');

  function today() {
    // Monday, 20 Jan
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    return `${weekday}, ${day} ${month}`;
  }

  return user && user.img && user.first_name && user.last_name && (
    <div className="header">
      <div className="flex-container">

        {/* <img className="component-16" src={user.img} onClick={()=>navigate('/members')} /> */}

          <img className={`component-16 ${hover}`} src={user.img}
            onMouseEnter={() => setHover('hover')}
            onMouseLeave={() => setHover('')}
            onTouchStart={() => setHover('hover')}
            onTouchEnd={() => setHover('')}
            onClick={() => navigate('/members')} />

          <div className="flex-container-1">
            <span>{user.first_name} {user.last_name}</span>
            <span className="monday-20-jan">{today()}</span>
          </div>

        {/* <img className="component-11" src={component11} onClick={() => navigate('/notifications')} /> */}

        <img className={`component-11 ${hover2}`} src={component11}
           onMouseEnter={() => setHover2('hover2')}
           onMouseLeave={() => setHover2('')}
           onTouchStart={() => setHover2('hover2')}
           onTouchEnd={() => setHover2('')}
        onClick={() => navigate('/notifications')} />

      </div>
      <img className="header-line" src={headerLine} />
    </div>
  );
}

export default Header;
