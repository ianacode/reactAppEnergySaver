import * as React from "react";
import "./Person.css";
const Person = ({ member }) => {
  return (
    <div className={`person-3 person`}>
      <img className="frame-2111-3" src={member.img} />
      <span className="tom">{member.name.first}</span>
    </div>
  );
};
export default Person;
