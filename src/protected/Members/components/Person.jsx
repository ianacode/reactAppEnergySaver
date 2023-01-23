import * as React from "react";
import "./Person.css";
import {useNavigate} from "react-router";
import loginService from "../../../services/LoginService";
const Person = ({ member }) => {
  const navigate = useNavigate();

  function handleChangeMember() {
    if (loginService.isAdult()) {
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
