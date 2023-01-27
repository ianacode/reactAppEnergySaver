import * as React from "react";
import { useState } from "react";
import "./Members.css";
import Person from "./components/Person";
import loginService from "../../services/LoginService";
import { useNavigate } from "react-router";
import userService from "../../services/UserService";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";


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

  const [hover, setHover] = useState('');
  const [hover2, setHover2] = useState('');

  return (
    <>
      <div className="members">
        <div className="scroll-area">
          <div className="members-flex-container">
            {members.map((member) => (
              <Person key={member.email} member={member} />
            ))}
          </div>
        </div>

<div className="blockbtns">
        {loginService.isAdult() && (
          <button className={`main-buttons main-buttons-instance-1 ${hover}`}
            onClick={() => navigate('/addmember')} >
            <div className="members-vector"
              onMouseEnter={() => setHover('active')}
              onMouseLeave={() => setHover('')}
              onTouchStart={() => setHover('active')}
              onTouchEnd={() => setHover('')}
              >
              Add member</div>
          </button>
        )}


        <button className={`main-buttons main-buttons-1-instance ${hover2}`}
          onClick={() => { logout() }}>
          <div className="members-vector"
            onMouseEnter={() => setHover2('active2')}
            onMouseLeave={() => setHover2('')}
            onTouchStart={() => setHover2('active2')}
            onTouchEnd={() => setHover2('')}>
            Logout</div>
        </button>

        </div>
      </div>
      <Footer />
    </>
  );
};
export default Members;
