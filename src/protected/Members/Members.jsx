import * as React from "react";
import "./Members.css";
import vector from "./assets/vector.svg";
import Person from "./components/Person";
import loginService from "../../services/LoginService";
import {useNavigate} from "react-router";
import userService from "../../services/UserService";
import {useEffect} from "react";


function Members(props) {

  let navigate = useNavigate();
  function logout() {
    loginService.logout();
    navigate("/loginreg");
  }

  const user = loginService.userAuthenticated();
  const [members, setMembers] = React.useState([]);
  useEffect(() => {
    userService.getMembers(user.home_id).then((data) => {
      setMembers(data);
    });
  }, []);

  return (
    <div className="members">
      <div className="members-flex-container">
        {members.map((member) => (
          <Person key={member.email} member={member} />
        ))}
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
