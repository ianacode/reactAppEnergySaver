import * as React from "react";
import "./Person.css";
import {useNavigate} from "react-router";
const Person = ({ member }) => {
  const navigate = useNavigate();
  return (
    <div className={`person-3 person`} onClick={() => navigate(`/changemember/${member.id}`)}>
      <img className="frame-2111-3" src={member.img} />
      <span className="tom">{member.first_name}</span>
    </div>
  );
};
export default Person;
