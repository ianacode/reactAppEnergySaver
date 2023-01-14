import React from "react";
// import "./css/header.css";
// import './css/header.css';
import headerLine from "./images/header/headerLine.svg";
import componentAvatar from "./images/header/componentAvatar.svg";
import componentAlarm from "./images/header/componentAlarm.svg";
import './css/header.css';


function Header(props) {
   return (
      <div className="specific-device">
         <div className="flex-container">
            <img className="component-16" src={componentAvatar} />
            <div className="flex-container-1">
               <span className="matthiew">Matthiew</span>
               <span className="monday-20-jan">Monday, 20 Jan</span>
            </div>
            <img className="component-11" src={componentAlarm} />
         </div>
         <img className="header-line" src={headerLine} />
      </div>
   );
}

export default Header;