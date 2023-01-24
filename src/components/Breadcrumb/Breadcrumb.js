import * as React from "react";
import './Breadcrumb.css';
import icon from "../../protected/Ranking/assets/icon.svg";
import {useNavigate} from "react-router";
function Breadcrumb(props) {

  const navigate = useNavigate();
  function handleGoBack() {
    if (props.link) {
      navigate(props.link);
    } else {
      navigate(-1);
    }
  }
   return (
     <div className="breadcrumb">
       <div className="ranking-flex-container-2">
         <img className="icon" src={icon} onClick={handleGoBack}/>
         <span className="ranking-1">{props.label}</span>
       </div>
     </div>
   );
}

export default Breadcrumb;
