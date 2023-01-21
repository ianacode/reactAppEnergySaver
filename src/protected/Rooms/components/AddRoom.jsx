import * as React from "react";
import { useNavigate } from "react-router";
import "./AddRoom.css";
import image2 from "../assets/image2.svg";

const AddRoom = (props) => {

  const navigate = useNavigate();

  return (
    <div className={`component-15 ${props.className || ""}`} onClick={()=>navigate('/addroom')} >
      <img className="image-2" src={props.image2 || image2} />



        <span className="add-room">{props.addRoom || "Add Room"}</span>

        <span className="and-devices">{props.andDevices || "and devices"}</span>
      </div>

      
  
  );
};
export default AddRoom;
