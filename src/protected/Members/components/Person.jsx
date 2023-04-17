import * as React from "react";
import "./Person.css";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
const Person = ({ member }) => {
  const user = useSelector((state) => state.loggedUser.currentUser);
  const navigate = useNavigate();

  function handleChangeMember() {
    if (user.role === 'adult' || user.id === member.id) {
      navigate(`/changemember/${member.id}`)
    }
  }

  return (
    <div className={`person-3 person`} onClick={handleChangeMember}>
      <img className="frame-2111-3" src={member.img} />
      <span className="tom">{member.first_name}</span>
    </div>
  );
};
export default Person;
