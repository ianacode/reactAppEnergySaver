import * as React from "react";
import "./Members.css";
import vector from "./assets/vector.svg";
import Person from "./components/Person";
import loginService from "../../services/LoginService";
import {useNavigate} from "react-router";


function Members(props) {

  let navigate = useNavigate();
  function logout() {
    loginService.logout();
    navigate("/loginreg");
  }

  return (
    <div className="members">
      <div className="members-flex-container">
        <Person className="person-1-instance-1" />
      </div>
      {loginService.isAdult() && (
        <button className={`main-buttons main-buttons-instance-1`}>
          <div className="members-vector">Add member</div>
        </button>
      )}
      <button className={`main-buttons main-buttons-1-instance`}
              onClick={()=>{logout()}}>
        <div className="members-vector">Logout</div>
      </button>
    </div>
  );
};
export default Members;
