import * as React from "react";
import "./RoomsDeviceDetail.css";
import iconTrash from "../assets/iconTrash.svg";
import {useNavigate, useParams} from "react-router";
const RoomsDeviceDetail = ({device, deleteDevice}) => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  return (
    <div className={`rooms-an-ddevices`}
         onClick={()=>navigate(`/rooms/${roomId}/devices/${device.id}`)}>
      <div className="vector-1">
        <span>{device.name}</span>
        {/* <img className="icon-edit" src={iconEdit} /> */}
        <img className="icon-trash" src={iconTrash}
             onClick={(event) => {
                event.stopPropagation();
                deleteDevice(device)
             }}
        />
      </div>
    </div>
  );
};
export default RoomsDeviceDetail;
