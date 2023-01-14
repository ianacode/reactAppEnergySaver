import * as React from "react";
import "./Members.css";
import vector from "./assets/vector.svg";
import MainButtons from "./components/MainButtons";
import Person from "./components/Person";


function Members(props) {
  const propsData = {
    mainButtons: {
      vector: vector,
      mainButton: "Add member",
    },
    mainButtons1: {
      vector: vector,
      mainButton: "Log out",
    },
  };

  return (
    <div className="members">
      <div className="members-flex-container">
        <Person className="person-1-instance-1" {...propsData.person1} />
        <Person className="person-instance-1" {...propsData.person} />
      </div>
      <div className="members-flex-container-1">
        <Person className="person-3-instance-1" {...propsData.person3} />
        <Person className="person-2-instance-1" {...propsData.person2} />
      </div>
      <MainButtons
        className="main-buttons-instance-1"
        {...propsData.mainButtons}
      />
      <MainButtons
        className="main-buttons-1-instance"
        {...propsData.mainButtons1}
      />
    </div>


  );
};
export default Members;
